import socketIO from "socket.io";

/**
 * Dispatch action when the user is leave from room
 */
export function EventDisconnected( socket : socketIO.Socket ) : void {
    socket.on("disconnect",() => {

    });
}