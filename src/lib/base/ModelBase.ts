export default abstract class ModelBase {
  public name: string;
  constructor(modelName: string) {
    this.name = modelName;
  }

  toString() : string {
    return this.name;
  }
}
