import { v4 } from "uuid";
import User from "./User.entities";

export default class Message {
  public message ?: string;
  public messageID ?: string;
  public date ?: string;
  public user ?: User;
}

export class MessageCreateID {
  static getID = (prefix : string = "sms-") : string => prefix + v4();
}