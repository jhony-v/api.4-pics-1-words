import { RoomCreatorID } from "../domain/entities/Room.entities";

export const NAME_LIST_CODE_ROOMS = "all_rooms";
export const NAME_PREFIX_CODE_ROOM = "room-";

export interface RegisterNewRoomAdapter {
  registerRoom(value: string): Promise<string>;
}

export default class UseCaseRegisterNewRoom {
  constructor(private registerNewRoomAdapter: RegisterNewRoomAdapter) {}
  registerRoom = async (): Promise<string> => {
    const valueID = RoomCreatorID.getID(NAME_PREFIX_CODE_ROOM);
    return await this.registerNewRoomAdapter.registerRoom(valueID);
  };
}
