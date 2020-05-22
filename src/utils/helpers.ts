import { IStatus } from "../types/IStatus";
import { FireDataBase } from "../types/IFirebase";

/**
 * get the status
 * @param error any kind
 */
export const status = (error: any): IStatus => {
  return { status: error ? false : true };
};

/**
 * create a key to new data in the document
 * @param type type of model
 * @param db get the database
 */
export const createKeyDocument = (type: string, db: FireDataBase): string => {
  return type + db.ref(type).push().key;
};

export const joinPath = (parameters: string[]): string => {
  return parameters.join("/");
};
