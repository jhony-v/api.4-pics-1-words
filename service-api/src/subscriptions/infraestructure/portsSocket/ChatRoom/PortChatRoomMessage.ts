import ChatRoom from "../../../application/ChatRoom";
import { response } from "express";

export function onChatRoomMessage(name: string, socket: SocketIO.Socket) {
  socket.on(name, (idRoom, idUserRoom, messageUserRoom) => {
    ChatRoom({ idRoom, idUserRoom, messageUserRoom }).then((responseData) => {
      socket.to(idUserRoom).emit(name, responseData);
    });
  });
}
