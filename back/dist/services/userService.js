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
exports.createUserService = exports.getUserByIdService = exports.getUsersService = void 0;
var data_source_1 = require("../config/data-source");
var credentialsService_1 = require("./credentialsService");
var getUsersService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.UserRepository.find({ relations: ["credentials", "appointments"] })];
            case 1:
                users = _a.sent();
                return [2, users];
        }
    });
}); };
exports.getUsersService = getUsersService;
var getUserByIdService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var userById;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.UserRepository.findOne({ where: { id: id }, relations: ["credentials", "appointments"] })];
            case 1:
                userById = _a.sent();
                if (!userById)
                    throw new Error("No existe un usuario con esa Id");
                return [2, userById];
        }
    });
}); };
exports.getUserByIdService = getUserByIdService;
var createUserService = function (user, credentials) { return __awaiter(void 0, void 0, void 0, function () {
    var username, password, name, email, birthdate, nDni, nDniUsed, emailUsed, usernameUsed, credentialsId, newUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = credentials.username, password = credentials.password;
                name = user.name, email = user.email, birthdate = user.birthdate, nDni = user.nDni;
                return [4, data_source_1.UserRepository.findOne({ where: { nDni: nDni } })];
            case 1:
                nDniUsed = _a.sent();
                if (nDniUsed)
                    throw new Error("El DNI ya está vinculado a otro usuario.");
                return [4, data_source_1.UserRepository.findOne({ where: { email: email } })];
            case 2:
                emailUsed = _a.sent();
                if (emailUsed)
                    throw new Error("El email ya está vinculado a otro usuario.");
                return [4, data_source_1.CredentialsRepository.findOne({ where: { username: username } })];
            case 3:
                usernameUsed = _a.sent();
                if (usernameUsed)
                    throw new Error("El nombre de usuario ya está en uso.");
                return [4, (0, credentialsService_1.createCredentialsService)(username, password)];
            case 4:
                credentialsId = _a.sent();
                newUser = data_source_1.UserRepository.create({
                    name: name,
                    email: email,
                    birthdate: birthdate,
                    nDni: nDni,
                    credentials: { id: credentialsId }
                });
                return [4, data_source_1.UserRepository.save(newUser)];
            case 5:
                _a.sent();
                return [2, newUser];
        }
    });
}); };
exports.createUserService = createUserService;
