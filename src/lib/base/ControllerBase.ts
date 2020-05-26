export default abstract class ControllerBase<T_MODEL> {
    protected model : T_MODEL;
    constructor(model : T_MODEL) {
        this.model = model;
    }
}
