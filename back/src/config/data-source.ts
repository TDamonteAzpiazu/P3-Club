import { DataSource } from "typeorm";
import { Credentials } from "../entities/Credentials";
import { User } from "../entities/User";
import { Appointment } from "../entities/Appointment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "@tobodamonte2003",
    database: "pm3",
    // dropSchema: true,
    synchronize: true,
    logging: ["error"],
    entities: [User, Credentials, Appointment],
    migrations: [],
    subscribers: [],
})

export const CredentialsModel = AppDataSource.getRepository(Credentials)
export const UserModel = AppDataSource.getRepository(User)
export const AppointmentModel = AppDataSource.getRepository(Appointment)