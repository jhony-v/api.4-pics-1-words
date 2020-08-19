export default class ValidatorObject {
  static empty(object: Object) {
    for (let i in object) {
      return false;
    }
    return true;
  }
}
