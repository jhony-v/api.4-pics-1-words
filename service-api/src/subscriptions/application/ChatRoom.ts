import ChatRoomCommunicate from "../domain/useCases/ChatRoomCommunicate";
import { RedisCommander } from "../infraestructure/databaseCommands/RedisCommander";
import ChatRoom from "../domain/models/ChatRoom";
import UserRoom from "../domain/models/UserRoom";

export interface IChatRoom {
  idRoom: string;
  idUserRoom: string;
  messageUserRoom: string;
}

export default (props: IChatRoom) : Promise<string> => {
  const { RedisCommanderInsert, RedisCommanderDelete } = RedisCommander;

  const room: ChatRoom = new ChatRoom(
    new UserRoom(props.idUserRoom, props.messageUserRoom)
  );
  room.id = props.idRoom;

  const chatCommunicate: ChatRoomCommunicate = new ChatRoomCommunicate(
    new RedisCommanderInsert(),
    new RedisCommanderDelete()
  );

  return chatCommunicate.insert(room);
};
