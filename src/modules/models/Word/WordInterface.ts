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