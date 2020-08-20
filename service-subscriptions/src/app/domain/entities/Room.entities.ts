import Message from "./Message.entities";

export default class Room<T> {
  public roomID?: string;
  public messages?: Message<T>[];
}