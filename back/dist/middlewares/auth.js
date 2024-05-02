"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth = function (req, res, next) {
    var token = req.headers.token;
    if (token === "autenticado") {
        next();
    }
    else {
        res.status(400).json({ message: "No autorizado" });
    }
};
exports.default = auth;
