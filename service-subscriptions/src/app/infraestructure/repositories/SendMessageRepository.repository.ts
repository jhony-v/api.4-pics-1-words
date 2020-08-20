import { injectable } from "inversify";
import SendMessageAdapter from "../adapters/SendMessageAdapter.port";
import useCases from "../../application/useCases";
import SendMessageIntoRoom from "../../application/useCases/SendMessageIntoRoom";
import redis from "../../../configuration/redis.config";

@injectable()
export default class SendMessageRepository implements SendMessageAdapter {
  /**
   * @param {any} data: parameters
   * @returns {any} create a new message into database
   */
  async sendMessage(data : any) {
    const useCaseSendMessage = useCases.get(SendMessageIntoRoom).send({
        message : data.message,
        user : {
            avatar : data.avatar,
            username : data.username,
        }
    });

  }
}
