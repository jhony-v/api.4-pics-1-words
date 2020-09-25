import { injectable } from "inversify";
import { promisify } from "util";
import redis from "../../../configuration/redis.config";

export interface DeleteKeyDataAccessProp {
  delete(key: string): Promise<string>;
}

@injectable()
export default class RedisDeleteKey implements DeleteKeyDataAccessProp {
  delete = async (key: string): Promise<string> => {
    try {
      const del = promisify(redis.del).bind(redis);
      const status = await del(key);
      return status ? key : "";
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
