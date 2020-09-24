export interface GetOnlineProps {
  value: string;
  start: number;
  end: number;
}

export interface OnlineUsersAdapter {
  getOnline(parameters: GetOnlineProps): Promise<string>;
}

export default class UseCaseGetOnlineUsers {
  constructor(private onlineUserAdapter: OnlineUsersAdapter) {}
  getOnline = async (parameters: GetOnlineProps): Promise<string> => {
    return  await this.onlineUserAdapter.getOnline(parameters);
  }
}
