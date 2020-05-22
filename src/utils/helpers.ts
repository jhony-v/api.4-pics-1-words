import { IStatus } from "../types/IStatus";

/**
 * get the status
 * @param error any kind
 */
export const status = (error: any): IStatus => {
  return { status: error ? false : true };
};

export const joinPath = (parameters: string[]): string => {
  return parameters.join("/");
};
