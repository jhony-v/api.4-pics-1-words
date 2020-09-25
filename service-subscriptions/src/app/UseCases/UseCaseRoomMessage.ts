import { injectable } from "inversify";
import Message, { MessageCreateID } from "../Domain/Entities/Message.entities";
import Room from "../Domain/Entities/Room.entities";

export interface RoomMessageProps{
    message: Message,
    room : Room
}

export interface CreateRoomMessageAdapter {
    create(roomMessage: RoomMessageProps) : Promise<any>
}

@injectable()
export default class UseCaseCreateNewRoomMessage implements CreateRoomMessageAdapter{
    constructor(private roomMessageAdapter: CreateRoomMessageAdapter){}
    create = async (roomMessage: RoomMessageProps) : Promise<any> => {
        const room = new Room();
        room.roomID = roomMessage.room.roomID;
        return await this.roomMessageAdapter.create({
            message : {
                ...roomMessage.message,
                messageID : MessageCreateID.getID()
            },
            room : room
        });
    } 
}