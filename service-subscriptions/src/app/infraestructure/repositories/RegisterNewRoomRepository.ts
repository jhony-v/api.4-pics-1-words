import { inject, injectable } from "inversify";
import { RegisterNewRoomAdapter } from "../../UseCases/UseCaseRegisterNewRoom";
import RedisCreateDataList, { CreateRoomDataAccessAdapter } from "../DataAccess/RedisCreateDataList";

export const REGISTER_NEW_ROOM = Symbol("REGISTER_NEW_ROOM");

@injectable()
export default class RegisterNewRoomRepository implements RegisterNewRoomAdapter {
    constructor(@inject(RedisCreateDataList) private registerDataAccess : CreateRoomDataAccessAdapter){}
    registerRoom = async (value: string) : Promise<string> => {
        try{
            return await this.registerDataAccess.create(value);
        }
        catch(error){
            throw new Error(error.message);
        }
    }
}