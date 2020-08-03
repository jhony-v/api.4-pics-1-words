import http from "http";
import { Express } from "express";
import ServerAdapter from "./adapters/ServerAdapter";

export default class MainServer implements ServerAdapter<http.Server> {
  private httpServer: http.Server;

  constructor(apiServer: ServerAdapter<Express>) {
    this.httpServer = new http.Server(apiServer.instance());
  }

  run() {
    this.httpServer.listen(process.env.PORT || 3000);
  }

  instance(): http.Server {
    return this.httpServer;
  }
}
