import SocketIO from "socket.io";
import ServerAdapter from "./adapters/ServerAdapter";
import PortChatRoomConnection from "../subscriptions/infraestructure/portsSocket/ChatRoom/PortChatRoomConnection";
import { ORIGIN_ACCESS_SOCKET } from "../subscriptions/infraestructure/properties";

export default class SocketServer<HttpServer> {
  private io: SocketIO.Server;
  constructor(server: ServerAdapter<HttpServer>) {
    this.io = SocketIO(server.instance());
    this.configuration();
    this.run();
  }

  private configuration() {
    this.io.origins(ORIGIN_ACCESS_SOCKET);
  }

  private run() {
    PortChatRoomConnection(this.io);
  }
}
