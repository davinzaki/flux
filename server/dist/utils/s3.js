import { S3Client, PutObjectCommand, DeleteObjectCommand, } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});
export const uploadFileToS3 = async (file, folder = "") => {
    const fileKey = `${folder ? folder + "/" : ""}${uuidv4()}-${file.originalname}`;
    await s3.send(new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileKey,
        Body: file.buffer,
        ContentType: file.mimetype,
    }));
    return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
};
export const deleteFileFromS3 = async (fileKey) => {
    await s3.send(new DeleteObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileKey,
    }));
};
export const deleteFilesFromS3 = async (urls) => {
    await Promise.all(urls.map((url) => {
        const key = extractKeyFromUrl(url);
        return key ? deleteFileFromS3(key) : Promise.resolve();
    }));
};
export const extractKeyFromUrl = (url) => {
    const match = url.match(/amazonaws\.com\/(.+)$/);
    return match?.[1] ?? null;
};
