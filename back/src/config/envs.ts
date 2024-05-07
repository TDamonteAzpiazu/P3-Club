import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

export const PORT = process.env.PORT || 3000;
export const PROTO = process.env.PROTO || "http";
export const HOST = process.env.HOST || "localhost";

export const DB_PORT = Number(process.env.DB_PORT) || 5432;
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_USERNAME = process.env.DB_USERNAME || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "test";
export const DB_NAME = process.env.DB_NAME || "test";


