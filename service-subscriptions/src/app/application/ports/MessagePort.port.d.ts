import Message from "../../domain/entities/Message.entities";

interface MessagePort<T> {
  send(message: Message<T>): Promise<Message<T>>;
}

export default MessagePort;