import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "@tobodamonte2003",
    database: "pm3",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
})