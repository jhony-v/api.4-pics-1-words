export interface HalUrl {
  href: string;
  method: string;
}

export interface HalLinks {
  [key: string]: HalUrl | HalUrl[];
}

export default abstract class ModelBase {
  public name: string;
  constructor(modelName: string) {
    this.name = modelName;
  }

  toString(): string {
    return this.name;
  }
}
