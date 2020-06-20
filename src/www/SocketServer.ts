import SocketIO from "socket.io";
import ServerAdapter from "./adapters/ServerAdapter";
import PortChatRoomConnection from "../push/infraestructure/portsSocket/ChatRoom/PortChatRoomConnection";

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

  private originsFromAccessSocket(): string[] {
    return ["http://127.0.0.1:5500", ""];
  }

  private run() {
    PortChatRoomConnection(this.io);
  }
}
