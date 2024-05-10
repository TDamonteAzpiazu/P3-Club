"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRepository = exports.UserRepository = exports.CredentialsRepository = exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Credentials_1 = require("../entities/Credentials");
var User_1 = require("../entities/User");
var Appointment_1 = require("../entities/Appointment");
var envs_1 = require("./envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: envs_1.DB_PORT,
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [User_1.User, Credentials_1.Credentials, Appointment_1.Appointment],
    migrations: [],
    subscribers: [],
});
exports.CredentialsRepository = exports.AppDataSource.getRepository(Credentials_1.Credentials);
exports.UserRepository = exports.AppDataSource.getRepository(User_1.User);
exports.AppointmentRepository = exports.AppDataSource.getRepository(Appointment_1.Appointment);
