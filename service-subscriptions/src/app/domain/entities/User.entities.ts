export default class User {
  public avatar?: string;
  public username?: string;
  public userID ?: string;
  constructor(userID: string) {
    this.userID = userID;
  }
}
