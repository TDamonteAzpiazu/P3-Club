"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersController_1 = require("../controllers/usersController");
var register_1 = __importDefault(require("../middlewares/register"));
var usersRouter = (0, express_1.Router)();
usersRouter.get("/", usersController_1.getUsers);
usersRouter.get("/:id", usersController_1.getUserById);
usersRouter.post("/register", register_1.default, usersController_1.registerUser);
usersRouter.post("/login", usersController_1.loginUser);
exports.default = usersRouter;
