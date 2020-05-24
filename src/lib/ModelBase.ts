export default abstract class ModelBase {
  protected name: string;
  constructor(modelName: string) {
    this.name = modelName;
  }
}
