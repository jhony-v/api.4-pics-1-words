export interface PropsWord {
  idword?: string;
  iduser?: string;
  letters?: string;
  images?: [string] | TImages;
  points?: number;
  dateCreated?: string;
}

export type TImages = { [key: number]: string };
export type TWord = { [key: string]: PropsWord };

export default class WordModel {
  public name: string = "";
  public idword: string = "";
  public iduser: string = "";
  public letters: string = "";
  public dateCreated: string = "";
  public points: number = 0;
  public images: [string] | TImages = {};
  public props: PropsWord = {};

  constructor() {
    this.name = "word";
  }

  dataCreate(): PropsWord {
    return this.props;
  }

  incrementPoints(points: number) {
    return points + 1;
  }
}
