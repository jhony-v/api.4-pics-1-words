import { Server } from "http";
import socket from "socket.io";

/**
 * Run socket server
 * @param server Server application
 */
export default async function serverSocket(server: Server): Promise<void> {
  const io = socket(server);
  io.on("connection", (socket: socket.Socket) => {
    console.log("connected ok");
  });
}
