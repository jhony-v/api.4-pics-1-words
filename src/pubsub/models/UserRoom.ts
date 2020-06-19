export interface PropsUserRoom {
  id: string;
  message: string;
}
export default class UserRoom {
  constructor(private id: string, private message: string) {}
  getId = () => this.id;
  getMessage = () => this.message;
}
