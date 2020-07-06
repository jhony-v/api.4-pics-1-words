import {
  AdapterCommandInsert,
  AdapterCommandDelete,
} from "../interfaces/AdapterCommand";

import ChatRoom from "../models/ChatRoom";

export default class ChatRoomCommunicate {
  constructor(
    private commanderInsert: AdapterCommandInsert,
    private commanderDelete: AdapterCommandDelete
  ) {}

  insert(room: ChatRoom) {
    return this.commanderInsert.insert(
      room.getIdChatRoom(),
      JSON.stringify(room.createUserRoomMessage())
    );
  }

  delete(room: ChatRoom) {
    return this.commanderDelete.delete(room.getIdChatRoom());
  }
}
