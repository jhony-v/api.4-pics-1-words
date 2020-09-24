import socket from "socket.io";
import getRepository from "../app/Infraestructure/Repositories";
import { GET_USERS_ONLINE } from "../app/Infraestructure/Repositories/GetOnlineUsersRepository";
import UseCaseGetOnlineUsers, { OnlineUsersAdapter} from "../app/UseCases/UseCaseGetOnlineUsers";

export default function EventGlobalUsersOnline(connect: socket.Socket) {
  connect.on("users:online", async () => {
    const repository = getRepository.get<OnlineUsersAdapter>(GET_USERS_ONLINE);
    const useCaseOnlineUsers = new UseCaseGetOnlineUsers(repository);
    const data = await useCaseOnlineUsers.getOnline({
      value: "users:online",
      start: 0,
      end: -1,
    });
    connect.emit("users:online",JSON.stringify(data));
  });
}
