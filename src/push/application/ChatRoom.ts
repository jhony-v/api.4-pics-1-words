import ChatRoomCommunicate from "../domain/useCases/ChatRoomCommunicate";
import { RedisCommander } from "../infraestructure/databaseCommands/RedisCommander";
import ChatRoom from "../domain/models/ChatRoom";
import UserRoom from "../domain/models/UserRoom";

const { RedisCommanderInsert, RedisCommanderDelete } = RedisCommander;

const room : ChatRoom = new ChatRoom(new UserRoom('1','2'));

const chatCommunicate : ChatRoomCommunicate = new ChatRoomCommunicate(
  new RedisCommanderInsert(),
  new RedisCommanderDelete()
);

chatCommunicate.insert(room);