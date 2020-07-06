import { onChatRoomMessage } from "./PortChatRoomMessage";

const SOCKET_NAMESPACE_ROOM = "room"; 
// initialize connection into socket room
export default function PortChatRoomConnection( socketServer: SocketIO.Server) {
  socketServer.of(SOCKET_NAMESPACE_ROOM).on("connection", (socket: SocketIO.Socket) => {
      onChatRoomMessage('message',socket);
  });   
}
