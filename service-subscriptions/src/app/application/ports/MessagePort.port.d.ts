import Message from "../../domain/entities/Message.entities";

export default interface MessagePort<T> {
  send(message: Message<T>): Promise<Message<T>>;
}
