import ApiServer from "./www/ApiServer";
import MainServer from "./www/MainServer";
import http from "http";

// instances api and api socket 
const api: ApiServer = new ApiServer();
const server: MainServer = new MainServer(api);


// run server
server.run();
