import UseCaseGetOnlineUsers from "../../app/UseCases/UseCaseGetOnlineUsers";
import UsersOnlineMock from "../../__mocks__/UsersOnlineMock";

let usersOnline;
beforeAll(() => {
  usersOnline = UsersOnlineMock();
});

describe("Use cases to view users online", () => {

  test("should get all users online", async () => {
    const parameters = {
      start: 1,
      end: 0,
    };
    const useCaseGetOnlineUsers = new UseCaseGetOnlineUsers({  getOnline: async (_) => usersOnline });
    const testGetOnlineUsers = useCaseGetOnlineUsers.getOnline(parameters);
    await expect(testGetOnlineUsers).resolves.toBe(usersOnline);
  });

  test("should all users filter by range start and end", async () => {
    const parameters = {
      start: 0,
      end: 0,
    };
    const useCaseGetOnlineUsers = new UseCaseGetOnlineUsers({
        getOnline: async params => usersOnline.filter((_,index: number) => {
            return index >= params.start && index < params.end 
        })
    })
    const testGetOnlineUsers = () => useCaseGetOnlineUsers.getOnline(parameters);

    await expect(testGetOnlineUsers()).resolves.toHaveLength(0);
    
    parameters.end = 10;
    await expect(testGetOnlineUsers()).resolves.toHaveLength(10);

    parameters.start = 5;
    parameters.end = 8;
    await expect(testGetOnlineUsers()).resolves.toHaveLength(3);
  });
  
});
