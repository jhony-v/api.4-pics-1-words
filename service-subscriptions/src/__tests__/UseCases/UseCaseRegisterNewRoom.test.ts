import {UseCaseRegisterNewRoom} from "../../app/UseCases/ManageRoomMessage/UseCaseManageRoomMessage";

describe("Use cases to register a new room", () => {

  test("should register a new room", async () => {
    const useCaseRegisterNewRoom = new UseCaseRegisterNewRoom({
      registerRoom: async () => "room-12235",
      roomExists : async () => false
    });
    const testRegisterNewRoom = await useCaseRegisterNewRoom.registerRoom();
    expect(testRegisterNewRoom).toMatch(/room/);
    expect(testRegisterNewRoom).not.toBe("");
  });

});
