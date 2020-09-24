import { injectable } from "inversify";
import { promisify } from "util";
import redis from "../../../configuration/redis.config";
import { NAME_LIST_CODE_ROOMS } from "../../UseCases/UseCaseRegisterNewRoom";

export interface CreateRoomDataAccessAdapter {
  create(value: string): Promise<string>;
}

@injectable()
export default class RedisCreateDataList implements CreateRoomDataAccessAdapter {
  create = async (value : string ): Promise<string> => {
    try {
        const lpush = promisify(redis.lpush).bind(redis);
        const status =  await lpush(NAME_LIST_CODE_ROOMS,value);
        return status ? value : null;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
