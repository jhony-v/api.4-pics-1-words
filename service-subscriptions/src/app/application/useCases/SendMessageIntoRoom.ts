import { injectable } from "inversify";
import MessagePort from "../ports/MessagePort.port";
import User from "../../domain/entities/User.entities";
import Message from "../../domain/entities/Message.entities";
import UniqueIDCreator from "../../domain/validators/UniqueIDCreator";

@injectable()
export default class SendMessageIntoRoom implements MessagePort<User> {
  /**
   * @param message: json of message
   * @returns return a new message
   */
  async send(message: Message<User>): Promise<Message<User>> {
    const selfUser = new User(message.user?.userID);
    const selfMessage = new Message(selfUser);
    selfMessage.message = message.message;
    selfMessage.messageID = UniqueIDCreator.define(message.messageID) + "-" + selfUser.userID;
    selfMessage.date = new Date().toLocaleDateString();
    return selfMessage;
  }
}
