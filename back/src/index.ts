import server from "./server";
import { PORT } from "./config/envs";

server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})