export default class Message<T> {
  public message ?: string;
  public messageID ?: string;
  public date ?: string;
  public user ?: T;
  constructor(user: T) {
    this.user = user;
  }
}
