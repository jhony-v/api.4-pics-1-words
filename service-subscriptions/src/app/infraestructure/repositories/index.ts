import { Container } from "inversify";
import { OnlineUsersAdapter } from "../../UseCases/UseCaseGetOnlineUsers";
import { RegisterNewRoomAdapter } from "../../UseCases/UseCaseRegisterNewRoom";
import RedisReadSortedSet, { ReadOnlineDataAccessAdapter } from "../DataAccess/RedisReadSortedSet";
import GetOnlineUsersRepository, { GET_USERS_ONLINE } from "./GetOnlineUsersRepository";
import RegisterNewRoomRepository, { REGISTER_NEW_ROOM } from "./RegisterNewRoomRepository";
import RedisCreateDataList, { CreateRoomDataAccessAdapter } from "../DataAccess/RedisCreateDataList";

const getRepository = new Container();
getRepository.bind<OnlineUsersAdapter>(GET_USERS_ONLINE).to(GetOnlineUsersRepository);
getRepository.bind<ReadOnlineDataAccessAdapter>(RedisReadSortedSet).toSelf();
getRepository.bind<RegisterNewRoomAdapter>(REGISTER_NEW_ROOM).to(RegisterNewRoomRepository);
getRepository.bind<CreateRoomDataAccessAdapter>(RedisCreateDataList).toSelf();
export default getRepository;

