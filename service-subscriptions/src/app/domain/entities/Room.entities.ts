import Message from "./Message.entities";
import { v4 } from "uuid";

export default class Room {
  public roomID?: string;
  public messages?: Message[];
}

export class RoomCreatorID {
  constructor(private prefix: string) {}
  getID = (): string => this.prefix + v4();
}
