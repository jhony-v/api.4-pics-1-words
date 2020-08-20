import { injectable, inject } from "inversify";
import SendMessageAdapter from "../../adapters/SendMessageAdapter.adapter";
import useCases from "../../../application/useCases";
import SendMessageIntoRoom from "../../../application/useCases/SendMessageIntoRoom";
import { CommandAddDataAdapter } from "../../adapters/CommandsDatabase.adapter";
import { COMMAND_ADD_MESSAGE_ROOM } from "../../adapters/types.adapter";
import { NewMessageUserProp } from "../../interfaces/MessageProp.interface";

@injectable()
export default class SendMessageRepository implements SendMessageAdapter {
  constructor(@inject(COMMAND_ADD_MESSAGE_ROOM.ADD_REDIS) private commandAdd : CommandAddDataAdapter) {}
  
  /**
   * @param data parameters
   * @returns create a new message into database
   */
  async sendMessage(data : NewMessageUserProp) {
    const useCaseSendMessage = await useCases.get(SendMessageIntoRoom).send({
        message : data.message,
        user : {
            avatar : data.user.avatar,
            username : data.user.username,
            userID : data.user.userID,
        }
    });
    const { messageID, ...restProps  } = useCaseSendMessage;
    this.commandAdd.add(messageID,restProps);
  }
}
