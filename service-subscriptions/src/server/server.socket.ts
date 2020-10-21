import { Server } from "http";
import socket from "socket.io";
import { EventDisconnected } from "../events/EventDisconnected";
import {EventGlobalUsersOnline} from "../events/EventGlobalUsersOnline";
import { EventChatInRoom, EventCreateRoomOnline } from "../events/EventRoomOnline";

/**
 * Run socket server
 * @param server Server application
 */
export default async function serverSocket(server: Server): Promise<void> {
  const io = socket(server);

  io.on("connection", (socket: socket.Socket) => {
    EventGlobalUsersOnline(socket);
    EventCreateRoomOnline(socket);
    EventChatInRoom(io,socket);
    EventDisconnected(socket);
  });
  
}
