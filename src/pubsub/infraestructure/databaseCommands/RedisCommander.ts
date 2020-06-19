import {
  AdapterCommandInsert,
  AdapterCommandDelete,
} from "../../domain/interfaces/AdapterCommand";
import { redisCache } from "../../../config/redis";
import { Multi } from "redis";

export namespace RedisCommander {
  export class RedisCommanderInsert implements AdapterCommandInsert {
    insert(key: string, values: string): Promise<string> {
      const multi  : Multi = redisCache.multi();
      return new Promise((resolve, reject) => {
        multi.rpush(key, values, (error, response) => {
          resolve(response.toString());
        });
      });
    }
  }

  export class RedisCommanderDelete implements AdapterCommandDelete {
    delete(key: string): Promise<string> {
      return new Promise((resolve, reject) => {
        redisCache.del(key, () => {
          resolve("");
        });
      });
    }
  }
}
