import { MessageCreateID} from "../../Domain/Entities/Message.entities";
import Room from "../../domain/entities/Room.entities";
import { RoomCreatorID } from "../../domain/entities/Room.entities";
import { IRoom } from "./types"

/**
 * Create messages in a chat room
 */
export class UseCaseCreateNewRoomMessage {
  constructor(private roomMessageAdapter: IRoom.CreateRoomMessageAdapter) {}
  create = async (roomMessage: IRoom.RoomMessageProps): Promise<any> => {
    const room = new Room();
    room.roomID = roomMessage.room.roomID;
    return await this.roomMessageAdapter.create({
      message: {
        ...roomMessage.message,
        messageID: MessageCreateID.getID(),
      },
      room: room,
    });
  };
}


/**
 * Register the message room
 */
export const NAME_LIST_CODE_ROOMS = "all_rooms";
export const NAME_PREFIX_CODE_ROOM = "room-";

export class UseCaseRegisterNewRoom {
  constructor(private registerNewRoomAdapter: IRoom.RegisterNewRoomAdapter) {}
  registerRoom = async (): Promise<string> => {
    const valueID = RoomCreatorID.getID(NAME_PREFIX_CODE_ROOM);
    return await this.registerNewRoomAdapter.registerRoom(valueID);
  };
  roomExists = async (roomId: string): Promise<boolean> => {
    return this.registerNewRoomAdapter.roomExists(roomId);
  };
}


/**
 * Get all messages in a room
 */
export class UseCaseGetRoomMessages {
  constructor(private getRoomMessagesAdapter: IRoom.GetRoomMessagesAdapter) {}
  getRoomMessages = async (parameters: IRoom.GetRoomMessagesProps): Promise<any> => {
    return await this.getRoomMessagesAdapter.getRoomMessages(parameters);
  };
}
