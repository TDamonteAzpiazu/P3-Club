import server from "./server/server";
import { PORT, HOST, PROTO } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
    .then(res => {
        console.log("Conectado exitosamente a la base de datos");
        server.listen(PORT, () => {
            console.log(`Servidor corriendo en ${PROTO}://${HOST}:${PORT}`);
        });
    })