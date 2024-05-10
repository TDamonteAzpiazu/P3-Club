"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_NAME = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_HOST = exports.DB_PORT = exports.HOST = exports.PROTO = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
exports.PORT = process.env.PORT || 3000;
exports.PROTO = process.env.PROTO || "http";
exports.HOST = process.env.HOST || "localhost";
exports.DB_PORT = Number(process.env.DB_PORT) || 5432;
exports.DB_HOST = process.env.DB_HOST || "localhost";
exports.DB_USERNAME = process.env.DB_USERNAME || "postgres";
exports.DB_PASSWORD = process.env.DB_PASSWORD || "test";
exports.DB_NAME = process.env.DB_NAME || "test";
