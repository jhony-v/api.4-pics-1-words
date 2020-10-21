import Message from "../../Domain/Entities/Message.entities";
import Room from "../../domain/entities/Room.entities";

export namespace IRoom {
  export interface RoomMessageProps {
    message: Message;
    room: Room;
  }
  export interface CreateRoomMessageAdapter {
    create(roomMessage: RoomMessageProps): Promise<any>;
  }

  export interface RegisterNewRoomAdapter {
    registerRoom(value: string): Promise<string>;
    roomExists(value: string): Promise<boolean>;
  }

  export interface GetRoomMessagesProps {
    key: string;
  }

  export interface GetRoomMessagesAdapter {
    getRoomMessages(parameters: GetRoomMessagesProps);
  }
}
