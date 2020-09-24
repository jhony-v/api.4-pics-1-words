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
  async getOnline(parameters: GetOnlineProps): Promise<string> {
    const data = await this.onlineUserAdapter.getOnline(parameters);
    console.log(data.length);
    return data;
  }
}
