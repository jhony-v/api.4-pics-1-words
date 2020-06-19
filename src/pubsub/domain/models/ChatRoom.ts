import UserRoom, { PropsUserRoom } from "./UserRoom";

export default class ChatRoom {
  public id: string = "";
  private readonly roomName: string = "room";

  constructor(private userRoom: UserRoom) {}

  public createUserRoomMessage(): PropsUserRoom {
    return {
      id: this.userRoom.getId(),
      message: this.userRoom.getMessage(),
    };
  }

  getIdChatRoom(): string {
    return this.generateRoomId();
  }

  private generateRoomId(): string {
    return `${this.roomName}:${this.id}`;
  }
}
