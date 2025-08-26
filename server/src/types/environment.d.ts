declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test";
      PORT: string;
      MONGO_URI: string;
      SERVER_PORT: string;
      CLIENT_PORT: string;
      MONGO_PORT: string;
    }
  }
}

export {};
