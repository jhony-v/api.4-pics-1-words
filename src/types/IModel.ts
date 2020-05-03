// types and interfaces of user
export interface IUser {
  iduser?: string;
  username?: string;
  pass?: string;
}

// types and interfaces of word
export interface IWord {
  iduser?: string;
  letters?: string;
  images?: [string] | TImages;
  points?: number;
  dateCreated?: string;
}

export type TImages = { [key: number]: string };
export type TWord = { [key: string]: IWord };