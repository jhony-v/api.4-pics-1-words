import socket from "socket.io";
import getRepository from "../app/Infraestructure/Repositories";
import { GET_USERS_ONLINE } from "../app/Infraestructure/Repositories/GetOnlineUsersRepository";
import UseCaseGetOnlineUsers, { OnlineUsersAdapter} from "../app/UseCases/UseCaseGetOnlineUsers";


const NAME_PUBSUB_ONLINE_USERS = "users:online";

/**
 * Manage the users online in the app
 */
export function EventGlobalUsersOnline(pubsub: socket.Socket) : void {
  pubsub.on(NAME_PUBSUB_ONLINE_USERS, async () => {
    const repository = getRepository.get<OnlineUsersAdapter>(GET_USERS_ONLINE);
    const useCaseOnlineUsers = new UseCaseGetOnlineUsers(repository);
    const data = await useCaseOnlineUsers.getOnline({
      value: "users:online",
      start: 0,
      end: -1,
    });
    pubsub.emit(NAME_PUBSUB_ONLINE_USERS,JSON.stringify(data));
  });
}
