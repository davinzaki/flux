import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

/**
 * Upload a file to S3
 */
export const uploadFileToS3 = async (
  file: Express.Multer.File,
  folder = ""
) => {
  const fileKey = `${folder ? folder + "/" : ""}${uuidv4()}-${
    file.originalname
  }`;

  await s3.send(
    new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileKey,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
  );

  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`;
};

/**
 * Delete a file from S3 by key
 */
export const deleteFileFromS3 = async (fileKey: string): Promise<void> => {
  await s3.send(
    new DeleteObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: fileKey,
    })
  );
};

/**
 * Delete multiple files from S3 by URLs
 */
export const deleteFilesFromS3 = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map((url) => {
      const key = extractKeyFromUrl(url);
      return key ? deleteFileFromS3(key) : Promise.resolve();
    })
  );
};

/**
 * Extract S3 key from full URL
 * https://bucket.s3.region.amazonaws.com/folder/file.png -> folder/file.png
 */
export const extractKeyFromUrl = (url: string): string | null => {
  const match = url.match(/amazonaws\.com\/(.+)$/);
  return match?.[1] ?? null;
};
