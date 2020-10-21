import socketIO from "socket.io";
import getRepository from "../app/Infraestructure/Repositories";
import CreateNewRoomMessageRepository from "../app/Infraestructure/Repositories/CreateNewRoomMessageRepository";
import GetRoomMessagesRepository from "../app/Infraestructure/Repositories/GetRoomMessagesRepository";
import RegisterNewRoomRepository from "../app/Infraestructure/Repositories/RegisterNewRoomRepository";
import { UseCaseCreateNewRoomMessage, UseCaseGetRoomMessages, UseCaseRegisterNewRoom,  } from "../app/UseCases/ManageRoomMessage/UseCaseManageRoomMessage";
import { IRoom } from "../app/UseCases/ManageRoomMessage/types"

const NAME_SOCKET_JOIN_ROOM = "join-room";

/**
 * Create new room when a user create a shared game
 * It works if the user joined the room and is the first user to create a room and join.
 * if the room exists, then join.
 */
export function EventCreateRoomOnline(socket: socketIO.Socket): void {
    socket.on(NAME_SOCKET_JOIN_ROOM, async (roomId : string) => {

        const registerNewRoomRepository = getRepository.get<IRoom.RegisterNewRoomAdapter>(RegisterNewRoomRepository);
        const useCaseRegisterNewRoom = new UseCaseRegisterNewRoom(registerNewRoomRepository);
        const roomExists = await useCaseRegisterNewRoom.roomExists(roomId);
        // Check if the room already exists
        if (roomExists) {
            socket.join(roomId);
        }
        else {
            // Create and join to the room
            useCaseRegisterNewRoom.registerRoom().then(() => {
                socket.join(roomId)
            });
        }

    });
}


const NAME_SOCKET_CHAT_ROOM = "chat-room";

/**
 * Chat between users in the room
 * create a new message in the current room, also then send the list of messages to all clients in the room
 */
export function EventChatInRoom(io: socketIO.Server, socket: socketIO.Socket): void {
    socket.on(NAME_SOCKET_CHAT_ROOM, async (payload : IRoom.RoomMessageProps) => {

        const getRoomMessageRepository = getRepository.get<IRoom.GetRoomMessagesAdapter>(GetRoomMessagesRepository);
        const newRoomMessageRepository = getRepository.get<IRoom.CreateRoomMessageAdapter>(CreateNewRoomMessageRepository);

        const useCaseCreateNewRoomMessage = new UseCaseCreateNewRoomMessage(newRoomMessageRepository);
        const useCaseGetRoomMessages = new UseCaseGetRoomMessages(getRoomMessageRepository)

        // Create a new message
        const asyncCreateRoomMessage = useCaseCreateNewRoomMessage.create({
            room : payload.room,
            message : payload.message
        });
        asyncCreateRoomMessage.then(async () => {
            const request = await useCaseGetRoomMessages.getRoomMessages({key:payload.room.roomID});
            io.to(payload.room.roomID).emit(NAME_SOCKET_CHAT_ROOM,JSON.stringify(request));
        });

    });
}
