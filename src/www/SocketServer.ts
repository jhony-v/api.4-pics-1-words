import SocketIO from "socket.io";
import ServerAdapter from "./adapters/ServerAdapter";

export default class SocketServer<HttpServer> {
  private io: SocketIO.Server;
  constructor(server: ServerAdapter<HttpServer>) {
    this.io = SocketIO(server.instance());
    this.configuration();
    this.run();
  }

  private configuration() {
    this.io.origins(this.originsFromAccessSocket());
  }

  private originsFromAccessSocket() : string[] {
    return [ 'http://127.0.0.1:5501','' ];
  }

  private run() {
    this.io.of('/chat').on('connection', (socket: SocketIO.Socket) => {
       socket.emit("nombre","daniela");
    });
  }
}
