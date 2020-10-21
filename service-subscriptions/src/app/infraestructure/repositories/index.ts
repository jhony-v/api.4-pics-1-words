import { Container } from "inversify";
import { OnlineUsersAdapter } from "../../UseCases/OnlineUsers/UseCaseGetOnlineUsers";
import RedisReadSortedSet, { ReadOnlineDataAccessAdapter } from "../DataAccess/RedisReadSortedSet";
import GetOnlineUsersRepository, { GET_USERS_ONLINE } from "./GetOnlineUsersRepository";
import RegisterNewRoomRepository, { REGISTER_NEW_ROOM } from "./RegisterNewRoomRepository";
import RedisCreateDataList, { CreateRoomDataAccessAdapter } from "../DataAccess/RedisCreateDataList";
import CreateNewRoomMessageRepository, { CREATE_ROOM_MESSAGE } from "./CreateNewRoomMessageRepository";
import { IRoom } from "../../UseCases/ManageRoomMessage/types";
import GetRoomMessagesRepository, { GET_ROOM_MESSAGES } from "./GetRoomMessagesRepository";

const getRepository = new Container();
getRepository.bind<OnlineUsersAdapter>(GET_USERS_ONLINE).to(GetOnlineUsersRepository);
getRepository.bind<IRoom.RegisterNewRoomAdapter>(REGISTER_NEW_ROOM).to(RegisterNewRoomRepository);
getRepository.bind<IRoom.CreateRoomMessageAdapter>(CREATE_ROOM_MESSAGE).to(CreateNewRoomMessageRepository);
getRepository.bind<IRoom.GetRoomMessagesAdapter>(GET_ROOM_MESSAGES).to(GetRoomMessagesRepository);
getRepository.bind<ReadOnlineDataAccessAdapter>(RedisReadSortedSet).toSelf();
getRepository.bind<CreateRoomDataAccessAdapter>(RedisCreateDataList).toSelf();
export default getRepository;

