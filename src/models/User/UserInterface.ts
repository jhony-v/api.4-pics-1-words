// types and interfaces of user
export interface IndividualPointsDayInterface {
    points: number;
    date: string;
  }
  export interface IUser {
    iduser?: string;
    username?: string;
    pass?: string;
    image?: string;
    personalPoints?: [IndividualPointsDayInterface];
  }
  