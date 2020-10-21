import { inject, injectable } from "inversify";
import RedisCreateDataList, { CreateRoomDataAccessAdapter } from "../DataAccess/RedisCreateDataList";
import { IRoom } from "../../UseCases/ManageRoomMessage/types"

export const CREATE_ROOM_MESSAGE = Symbol("CREATE_ROOM_MESSAGE");  

@injectable()
export default class CreateNewRoomMessageRepository implements IRoom.CreateRoomMessageAdapter {
    constructor(@inject(RedisCreateDataList) private createDataAccess : CreateRoomDataAccessAdapter){}

    /**
     * Create a new message in the room identified by id
     * @param roomMessage data
     */
    create = async (roomMessage: IRoom.RoomMessageProps) : Promise<any> => {
        const { room , message } = roomMessage;
        try {
            return await this.createDataAccess.create(room.roomID,JSON.stringify(message));
        }
        catch(error) {
            return null;
        }
    }
}