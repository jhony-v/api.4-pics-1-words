import socketIO from "socket.io";
import getRepository from "../app/Infraestructure/Repositories";
import { GET_USERS_ONLINE } from "../app/Infraestructure/Repositories/GetOnlineUsersRepository";
import UseCaseGetOnlineUsers, { OnlineUsersAdapter} from "../app/UseCases/OnlineUsers/UseCaseGetOnlineUsers";


const NAME_SOCKET_ONLINE_USERS = "users:online";

/**
 * Get the users online connected in the app
 */
export function EventGlobalUsersOnline(socket: socketIO.Socket) : void {
  socket.on(NAME_SOCKET_ONLINE_USERS, async () => {
    const repository = getRepository.get<OnlineUsersAdapter>(GET_USERS_ONLINE);
    const useCaseOnlineUsers = new UseCaseGetOnlineUsers(repository);
    const data = await useCaseOnlineUsers.getOnline({
      start: 0,
      end: -1,
    });
    socket.emit(NAME_SOCKET_ONLINE_USERS,JSON.stringify(data));
  });
}
