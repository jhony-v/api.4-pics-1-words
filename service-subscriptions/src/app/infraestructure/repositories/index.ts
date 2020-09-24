import { Container } from "inversify";
import { OnlineUsersAdapter } from "../../UseCases/UseCaseGetOnlineUsers";
import RedisReadSortedSet, { ReadOnlineDataAccessAdapter } from "../DataAccess/RedisReadSortedSet";
import GetOnlineUsersRepository, { GET_USERS_ONLINE } from "./GetOnlineUsersRepository";

const getRepository = new Container();
getRepository.bind<OnlineUsersAdapter>(GET_USERS_ONLINE).to(GetOnlineUsersRepository);
getRepository.bind<ReadOnlineDataAccessAdapter>(RedisReadSortedSet).toSelf();
export default getRepository;