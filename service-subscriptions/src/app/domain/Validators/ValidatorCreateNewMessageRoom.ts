import Message from "../Entities/Message.entities";
import Room from "../Entities/Room.entities";

export default class ValidateCreateNewMessageRoom {
  static empty = (room: Room, message: Message): boolean => {
    return !room.roomID || !message.messageID;
  };
}
