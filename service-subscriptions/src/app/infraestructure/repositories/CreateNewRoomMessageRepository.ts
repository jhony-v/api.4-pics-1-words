import { inject, injectable } from "inversify";
import { CreateRoomMessageAdapter } from "../../UseCases/UseCaseRoomMessage";
import { RoomMessageProps } from "../../UseCases/UseCaseRoomMessage";
import RedisCreateDataList, { CreateRoomDataAccessAdapter } from "../DataAccess/RedisCreateDataList";

export const CREATE_ROOM_MESSAGE = Symbol("CREATE_ROOM_MESSAGE");  

@injectable()
export default class CreateNewRoomMessageRepository implements CreateRoomMessageAdapter{
    constructor(@inject(RedisCreateDataList) private createDataAccess : CreateRoomDataAccessAdapter){}
    create = async (roomMessage: RoomMessageProps) : Promise<any> => {
        const { room , message } = roomMessage;
        try {
            return await this.createDataAccess.create(room.roomID,JSON.stringify(message));
        }
        catch(error) {
            return null;
        }
    }
}