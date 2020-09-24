import User from "./User.entities";

export default class Message {
  public message ?: string;
  public messageID ?: string;
  public date ?: string;
  public user ?: User;
}
