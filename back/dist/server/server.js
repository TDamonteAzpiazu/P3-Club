"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var indexRouter_1 = __importDefault(require("../routes/indexRouter"));
var server = (0, express_1.default)();
server.use((0, morgan_1.default)("dev"));
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.use(indexRouter_1.default);
exports.default = server;
