"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var envs_1 = require("./config/envs");
require("reflect-metadata");
var data_source_1 = require("./config/data-source");
data_source_1.AppDataSource.initialize()
    .then(function (res) {
    console.log("Conectado exitosamente a la base de datos");
    server_1.default.listen(envs_1.PORT, function () {
        console.log("Servidor corriendo en ".concat(envs_1.PROTO, "://").concat(envs_1.HOST, ":").concat(envs_1.PORT));
    });
});
