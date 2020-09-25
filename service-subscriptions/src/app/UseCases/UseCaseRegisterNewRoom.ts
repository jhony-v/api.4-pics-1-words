import { RoomCreatorID } from "../Domain/Entities/Room.entities";

export const NAME_LIST_CODE_ROOMS = "room-";

export interface RegisterNewRoomAdapter {
  registerRoom(value: string): Promise<string>;
}

export default class UseCaseRegisterNewRoom {
  constructor(private registerNewRoomAdapter: RegisterNewRoomAdapter) {}
  registerRoom = async (): Promise<string> => {
    const valueID = RoomCreatorID.getID();
    return await this.registerNewRoomAdapter.registerRoom(valueID);
  };
}
