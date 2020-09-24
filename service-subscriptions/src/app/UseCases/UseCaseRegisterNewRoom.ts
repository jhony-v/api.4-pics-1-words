import { RoomCreatorID } from "../Domain/Entities/Room.entities";

export const NAME_LIST_CODE_ROOMS = "all_code_rooms";

export interface RegisterNewRoomAdapter {
  registerRoom(value: string): Promise<string>;
}

export default class UseCaseRegisterNewRoom {
  constructor(private registerNewRoomAdapter: RegisterNewRoomAdapter) {}
  registerRoom = async (): Promise<string> => {
    const roomCreator: RoomCreatorID = new RoomCreatorID(NAME_LIST_CODE_ROOMS);
    const valueID = roomCreator.getID();
    return await this.registerNewRoomAdapter.registerRoom(valueID);
  };
}
