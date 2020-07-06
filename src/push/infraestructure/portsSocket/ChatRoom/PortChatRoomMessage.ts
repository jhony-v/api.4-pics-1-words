export function onChatRoomMessage(name: string, socket: SocketIO.Socket) {
  socket.on(name, (id, data) => {
    socket.to(id).emit(name, data);
  });
}
