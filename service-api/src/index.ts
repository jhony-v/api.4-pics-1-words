import ApiServer from "./www/ApiServer";
import SocketServer from "./www/SocketServer";
import MainServer from "./www/MainServer";
import http from "http";

// instances api and api socket 
const api: ApiServer = new ApiServer();
const server: MainServer = new MainServer(api);
const socket: SocketServer<http.Server> = new SocketServer<http.Server>(server);


// run server
server.run();
