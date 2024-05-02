"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersRouter_1 = __importDefault(require("./usersRouter"));
var appointmentRouter_1 = __importDefault(require("./appointmentRouter"));
var indexRouter = (0, express_1.Router)();
indexRouter.use("/users", usersRouter_1.default);
indexRouter.use("/appointments", appointmentRouter_1.default);
exports.default = indexRouter;
