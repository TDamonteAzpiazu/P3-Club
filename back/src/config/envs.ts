import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

export const PORT = process.env.PORT || 3000;
export const PROTO = process.env.PROTO || "http";
export const HOST = process.env.HOST || "localhost";
