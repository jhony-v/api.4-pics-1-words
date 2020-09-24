import { InversifyExpressServer } from "inversify-express-utils";
import serverSocket from "./server.socket";
import { Application } from "express";
import { Server } from "http";
import layer from "../app/Infraestructure/RestAPI/Layers";

/**
 * Run server application
 */
export default async function server(): Promise<void> {
  try {
    const inversifyServer = new InversifyExpressServer(layer);
    const app: Application = inversifyServer.build();
    const listenServer: Server = await app.listen(8000);
    serverSocket(listenServer);
  } catch (exeption) {
    console.log(exeption);
  }
}
