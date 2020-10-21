import { inject, injectable } from "inversify";
import { GetRoomMessagesAdapter, GetRoomMessagesProps } from "../../UseCases/ManageRoomMessage/UseCaseManageRoomMessage";
import RedisCreateDataList, { CreateRoomDataAccessAdapter } from "../DataAccess/RedisCreateDataList";


export const GET_ROOM_MESSAGES = Symbol("GET_ROOM_MESSAGES");

@injectable()
export default class GetRoomMessagesRepository implements GetRoomMessagesAdapter {
    constructor(@inject(RedisCreateDataList) private dataListDataAccess : CreateRoomDataAccessAdapter){}
    getRoomMessages = async (parameters : GetRoomMessagesProps) => {
        try {
            this.dataListDataAccess.getAll(parameters.key,0,-1);
        }
        catch(error){
            throw new Error(error)
        }
    }
}