"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointmentController_1 = require("../controllers/appointmentController");
var schedule_1 = __importDefault(require("../middlewares/schedule"));
var appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", appointmentController_1.getAllAppointments);
appointmentRouter.get("/:id", appointmentController_1.getAppointment);
appointmentRouter.post("/schedule", schedule_1.default, appointmentController_1.scheduleAppointment);
appointmentRouter.put("/cancel/:id", appointmentController_1.cancelAppointment);
exports.default = appointmentRouter;
