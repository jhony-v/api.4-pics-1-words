import { InversifyExpressServer } from "inversify-express-utils";
import layer from "../app/infraestructure/layer";

async function server() {
    const inversifyServer = new InversifyExpressServer(layer, null, { rootPath: "/api" });
    const app = inversifyServer.build();
    await app.listen(8000);
} 

export default server;