import { Container } from "inversify";
import SendMessageAdapter from "../adapters/SendMessageAdapter.adapter";
import SendMessageRepository from "./messages/SendMessageRepository";
import { CommandAddDataAdapter } from "../adapters/CommandsDatabase.adapter";
import RedisAddDataRepository from "./databases/RedisAddDataRepository";
import { COMMAND_ADD_MESSAGE_ROOM } from "../adapters/types.adapter";

const getRepository = new Container();
getRepository.bind<SendMessageAdapter>(SendMessageRepository).to(SendMessageRepository);
getRepository.bind<CommandAddDataAdapter>(COMMAND_ADD_MESSAGE_ROOM.ADD_REDIS).to(RedisAddDataRepository);
export default getRepository;
