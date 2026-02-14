export declare const uploadFileToS3: (file: Express.Multer.File, folder?: string) => Promise<string>;
export declare const deleteFileFromS3: (fileKey: string) => Promise<void>;
export declare const deleteFilesFromS3: (urls: string[]) => Promise<void>;
export declare const extractKeyFromUrl: (url: string) => string | null;
