import ChatRoomCommunicate from "../useCases/ChatRoomCommunicate";
import { RedisCommander } from "../commands/RedisCommander";
import ChatRoom from "../models/ChatRoom";
import UserRoom from "../models/UserRoom";

const { RedisCommanderInsert, RedisCommanderDelete } = RedisCommander;

const room : ChatRoom = new ChatRoom(new UserRoom('1','2'));

const chatCommunicate : ChatRoomCommunicate = new ChatRoomCommunicate(
  new RedisCommanderInsert(),
  new RedisCommanderDelete()
);

chatCommunicate.insert(room);