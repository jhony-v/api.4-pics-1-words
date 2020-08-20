import { Server } from "http";
import socket from "socket.io";
import getRepository from "../app/infraestructure/repositories";
import SendMessageRepository from "../app/infraestructure/repositories/messages/SendMessageRepository";
import SendMessageAdapter from "../app/infraestructure/adapters/SendMessageAdapter.adapter";

/**
 * Run socket server
 * @param server Server application
 */
export default async function serverSocket(server: Server): Promise<void> {
  const io = socket(server);
  io.on("connection", (socket: socket.Socket) => {
    getRepository.get<SendMessageAdapter>(SendMessageRepository).sendMessage({
      message : "jhony",
      user : {
        avatar : "xd",
        username: "home",
        userID : "14"
      }
    })
  });
}
