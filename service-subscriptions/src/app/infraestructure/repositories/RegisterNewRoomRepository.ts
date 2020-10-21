import { inject, injectable } from "inversify";
import { NAME_LIST_CODE_ROOMS } from "../../UseCases/ManageRoomMessage/UseCaseManageRoomMessage";
import RedisCreateDataList, { CreateRoomDataAccessAdapter } from "../DataAccess/RedisCreateDataList";
import RedisKeyExists, { KeyExistsDataAccessAdapter } from "../DataAccess/RedisKeyExists";
import { IRoom } from "../../UseCases/ManageRoomMessage/types"

export const REGISTER_NEW_ROOM = Symbol("REGISTER_NEW_ROOM");

@injectable()
export default class RegisterNewRoomRepository implements IRoom.RegisterNewRoomAdapter {
    constructor(
        @inject(RedisCreateDataList) private registerDataAccess : CreateRoomDataAccessAdapter,
        @inject(RedisKeyExists) private keyExistDataAccess : KeyExistsDataAccessAdapter
    ){}
    
    /**
     * Register a room 
     * @param value 
     */
    registerRoom = async (value: string) : Promise<string> => {
        try{
            return await this.registerDataAccess.create(NAME_LIST_CODE_ROOMS,value);
        }
        catch(error){
            return null;
        }
    }

    /**
     * Check if exists the room
     * @param value 
     */
    roomExists = async (value: string) : Promise<boolean> => {
        try {
            return await this.keyExistDataAccess.keyExists(value);
        }catch(error){
            return null;
        }
    }
}