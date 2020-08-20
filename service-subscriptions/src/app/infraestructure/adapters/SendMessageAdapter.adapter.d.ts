import { NewMessageUserProp } from "../interfaces/MessageProp.interface";

interface SendMessageAdapter {
    sendMessage(data : NewMessageUserProp) : any;
}

export default SendMessageAdapter;