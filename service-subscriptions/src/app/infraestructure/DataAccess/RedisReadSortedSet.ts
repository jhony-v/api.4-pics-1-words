import { injectable } from "inversify";
import { promisify } from "util";
import redis from "../../../configuration/redis.config";

export interface ReadOnlineDataAccessProps {
  value: string;
  start: number;
  end: number;
}

export interface ReadOnlineDataAccessAdapter {
  read(args: ReadOnlineDataAccessProps): Promise<string>;
}

@injectable()
export default class RedisReadSortedSet implements ReadOnlineDataAccessAdapter {
  read = async (args: ReadOnlineDataAccessProps): Promise<string>  => {
    try {
      const zrange = promisify(redis.zrange).bind(redis);
      return await zrange(args.value, args.start, args.end);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
