import { v4 as uuidv4 } from "uuid";

/**
 * Create unique id with prefix if is necessary
 */
export default class UniqueIDCreator {
  /**
   * @param {string} namespace prefix
   * @returns {string} unique id
   */
  static define(namespace: string = ""): string {
    return (namespace !== "" ? namespace + ":" : "") + uuidv4();
  }
}
