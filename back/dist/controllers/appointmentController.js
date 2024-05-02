"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointment = exports.getAllAppointments = void 0;
var getAllAppointments = function (req, res) {
    res.send("Listado de Citas");
};
exports.getAllAppointments = getAllAppointments;
var getAppointment = function (req, res) {
    res.send("Cita específica");
};
exports.getAppointment = getAppointment;
var scheduleAppointment = function (req, res) {
    res.send("Cita creada");
};
exports.scheduleAppointment = scheduleAppointment;
var cancelAppointment = function (req, res) {
    res.send("Cita cancelada");
};
exports.cancelAppointment = cancelAppointment;
