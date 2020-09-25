import ValidateCreateNewMessageRoom from "../../app/domain/Validators/ValidatorCreateNewMessageRoom";
import UseCaseCreateNewRoomMessage from "../../app/UseCases/UseCaseRoomMessage";
import MessageMock from "../../__mocks__/MessageMock";

let useCaseCreateRoomMessage: UseCaseCreateNewRoomMessage;
let newMessage;

beforeEach(() => {
  newMessage = MessageMock();
  useCaseCreateRoomMessage = new UseCaseCreateNewRoomMessage({
    create: async (value) => value,
  });
});

describe("Use cases to check the message into room", () => {
  
  test("should exists the rooom to insert a new message", async () => {
    const testCreateNewMessageIntoRoom = useCaseCreateRoomMessage.create(newMessage);
    const testRequest = await testCreateNewMessageIntoRoom;
    expect(testRequest.room.roomID).toBe(newMessage.room.roomID);
    expect(testRequest.room).toEqual(newMessage.room);
  });

  test("should request empty object if the arguments to create a message is empty", async () => {
    const newMessageEmpty = {
        message: {},
        room: {}
    }
    const testCreateNewMessageIntoRoom = useCaseCreateRoomMessage.create(newMessageEmpty);
    const { room, message } = await testCreateNewMessageIntoRoom;
    const testEmptyRoomMessage = ValidateCreateNewMessageRoom.empty(room,message);
    expect(testEmptyRoomMessage).toBeTruthy();
})

});
