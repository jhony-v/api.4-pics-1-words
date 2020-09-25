export interface GetOnlineProps {
  start: number;
  end: number;
}

export interface OnlineUsersAdapter {
  getOnline(parameters: GetOnlineProps): Promise<any>;
}

export default class UseCaseGetOnlineUsers {
  constructor(private onlineUserAdapter: OnlineUsersAdapter) {}
  getOnline = async (parameters: GetOnlineProps): Promise<any> => {
    return await this.onlineUserAdapter.getOnline(parameters);
  }
}
