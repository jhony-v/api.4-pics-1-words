import { RoomCreatorID } from "../Domain/Entities/Room.entities";

export const NAME_LIST_CODE_ROOMS = "all_code_rooms";

export interface RegisterNewRoomAdapter {
  registerRoom(value: string): Promise<string>;
}

export default class UseCaseRegisterNewRoom {
  constructor(private registerNewRoomAdapter: RegisterNewRoomAdapter) {}
  registerRoom = async (): Promise<string> => {
    const valueID = RoomCreatorID.getID(NAME_LIST_CODE_ROOMS);
    return await this.registerNewRoomAdapter.registerRoom(valueID);
  };
}
