export interface IWord {
  iduser?: string;
  letters?: string;
  images?: [string] | TImages;
  points?: number;
  dateCreated?: string;
}

export type TImages = { [key: number]: string };
export type TWord = { [key: string]: IWord };
