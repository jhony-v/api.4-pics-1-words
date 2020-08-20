import { InversifyExpressServer } from "inversify-express-utils";
import layer from "../app/infraestructure/api/layers";
import serverSocket from "./server.socket";
import { Application } from "express";
import { Server } from "http";

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
