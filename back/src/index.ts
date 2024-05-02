import server from "./server/server";
import { PORT, HOST, PROTO } from "./config/envs";

server.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PROTO}://${HOST}:${PORT}`);
})