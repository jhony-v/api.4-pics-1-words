import { injectable } from "inversify";
import { promisify } from "util";
import redis from "../../../configuration/redis.config";

export interface KeyExistsDataAccessAdapter {
  keyExists(key: string): Promise<boolean>;
}

@injectable()
export default class RedisKeyExists implements KeyExistsDataAccessAdapter {
  keyExists = async (key: string): Promise<boolean> => {
    try {
      const exists = promisify(redis.exists).bind(redis);
      const status = await exists(key);
      return status;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
