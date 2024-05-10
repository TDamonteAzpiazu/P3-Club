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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointment = exports.getAllAppointments = void 0;
var appointmentService_1 = require("../services/appointmentService");
var getAllAppointments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var appointments, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, (0, appointmentService_1.getAllAppointmentsService)()];
            case 1:
                appointments = _a.sent();
                res.status(200).json(appointments);
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                res.status(404).json({ error: error_1.message });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getAllAppointments = getAllAppointments;
var getAppointment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var appointmentById, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, (0, appointmentService_1.getAppointmentByIdService)(parseInt(req.params.id))];
            case 1:
                appointmentById = _a.sent();
                res.status(200).json(appointmentById);
                return [3, 3];
            case 2:
                error_2 = _a.sent();
                res.status(404).json({ error: error_2.message });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.getAppointment = getAppointment;
var scheduleAppointment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, date, time, type, userId, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, date = _a.date, time = _a.time, type = _a.type, userId = _a.userId;
                return [4, (0, appointmentService_1.createAppointmentService)({ date: date, time: time, type: type }, userId)];
            case 1:
                _b.sent();
                res.status(201).send("El turno fue creado exitosamente.");
                return [3, 3];
            case 2:
                error_3 = _b.sent();
                res.status(400).json({ error: error_3.message });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.scheduleAppointment = scheduleAppointment;
var cancelAppointment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var appointmentId, cancelledAppointment, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                appointmentId = parseInt(req.params.id);
                return [4, (0, appointmentService_1.changeStatusAppointmentService)(appointmentId)];
            case 1:
                cancelledAppointment = _a.sent();
                res.status(200).json(cancelledAppointment);
                return [3, 3];
            case 2:
                error_4 = _a.sent();
                res.status(404).json({ error: error_4.message });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.cancelAppointment = cancelAppointment;
