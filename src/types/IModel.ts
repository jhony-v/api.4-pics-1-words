// types and interfaces of user
export interface IIndividualPointsDay {
  points: number;
  date: string;
}
export interface IUser {
  iduser?: string;
  username?: string;
  pass?: string;
  personalPoints?: [IIndividualPointsDay];
}

// types and interfaces of word
export interface IWord {
  idword?: string;
  iduser?: string;
  letters?: string;
  images?: [string] | TImages;
  points?: number;
  dateCreated?: string;
}

export type TImages = { [key: number]: string };
export type TWord = { [key: string]: IWord };
