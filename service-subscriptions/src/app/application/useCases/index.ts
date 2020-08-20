import { Container } from "inversify";
import SendMessageIntoRoom from "./SendMessageIntoRoom";
import MessagePort from "../ports/MessagePort.port";
import User from "../../domain/entities/User.entities";

const useCases = new Container();
useCases.bind<MessagePort<User>>("").to(SendMessageIntoRoom);
export default useCases;
