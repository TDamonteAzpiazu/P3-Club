"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = exports.getUserById = exports.getUsers = void 0;
var getUsers = function (req, res) {
    res.send("Listado de usuarios");
};
exports.getUsers = getUsers;
var getUserById = function (req, res) {
    res.send("Usuario con Id");
};
exports.getUserById = getUserById;
var registerUser = function (req, res) {
    res.send("Registro de usuario");
};
exports.registerUser = registerUser;
var loginUser = function (req, res) {
    res.send("Login de usuario");
};
exports.loginUser = loginUser;
