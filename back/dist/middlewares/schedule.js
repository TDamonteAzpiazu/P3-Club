"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Appointment_1 = __importDefault(require("../entities/Appointment"));
var scheduleDataCheck = function (req, res, next) {
    var _a = req.body, date = _a.date, time = _a.time, type = _a.type, userId = _a.userId;
    var fechaEnFormato = new Date(date);
    if (!date || !time || !type || !userId) {
        res.status(400).json({ message: "Faltan datos" });
    }
    if (!fechaEnFormato.getTime() ||
        typeof time !== "string" ||
        !Object.values(Appointment_1.default).includes(type) ||
        typeof userId !== "number") {
        res.status(400).json({ message: "Los datos ingresados no son válidos" });
    }
    next();
};
exports.default = scheduleDataCheck;
