import { DataSource } from "typeorm";
import { Credentials } from "../entities/Credentials";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT,  DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    // dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User, Credentials, Appointment],
    migrations: [],
    subscribers: [],
})

export const CredentialsRepository = AppDataSource.getRepository(Credentials)
export const UserRepository = AppDataSource.getRepository(User)
export const AppointmentRepository = AppDataSource.getRepository(Appointment)