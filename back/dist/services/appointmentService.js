"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeStatusAppointmentService = exports.createAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentsService = void 0;
var data_source_1 = require("../config/data-source");
var Appointment_1 = __importDefault(require("../entities/Appointment"));
var getAllAppointmentsService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var appointments;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.AppointmentRepository.find()];
            case 1:
                appointments = _a.sent();
                if (appointments.length == 0)
                    throw new Error("No hay turnos");
                return [2, appointments];
        }
    });
}); };
exports.getAllAppointmentsService = getAllAppointmentsService;
var getAppointmentByIdService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var foundAppointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.AppointmentRepository.findOne({ where: { id: id } })];
            case 1:
                foundAppointment = _a.sent();
                if (!foundAppointment)
                    throw new Error("No existe un turno con esa Id.");
                return [2, foundAppointment];
        }
    });
}); };
exports.getAppointmentByIdService = getAppointmentByIdService;
var createAppointmentService = function (appointment, userId) { return __awaiter(void 0, void 0, void 0, function () {
    var date, time, type, userExists, newAppointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                date = appointment.date, time = appointment.time, type = appointment.type;
                if (!(type in Appointment_1.default))
                    throw new Error("El tipo de reserva no existe.");
                return [4, data_source_1.UserRepository.findOne({ where: { id: userId } })];
            case 1:
                userExists = _a.sent();
                if (!userExists)
                    throw new Error("No se encontro el usuario con esa Id.");
                newAppointment = data_source_1.AppointmentRepository.create({ date: date, time: time, type: type, user: userExists });
                return [4, data_source_1.AppointmentRepository.save(newAppointment)];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); };
exports.createAppointmentService = createAppointmentService;
var changeStatusAppointmentService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var appointmentToChange;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, (0, exports.getAppointmentByIdService)(id)];
            case 1:
                appointmentToChange = _a.sent();
                if (!appointmentToChange)
                    throw new Error("Appointment not found");
                appointmentToChange.status = "cancelled";
                return [4, data_source_1.AppointmentRepository.save(appointmentToChange)];
            case 2:
                _a.sent();
                return [2, appointmentToChange];
        }
    });
}); };
exports.changeStatusAppointmentService = changeStatusAppointmentService;
