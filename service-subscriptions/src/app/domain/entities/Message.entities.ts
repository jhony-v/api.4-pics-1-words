import User from "./User.entities";

export default class Message<T> {
  public message ?: string;
  public messageID ?: string;
  public date ?: string;
  public user ?: User;
}
