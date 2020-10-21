import { injectable } from "inversify";
import { promisify } from "util";
import redis from "../../../configuration/redis.config";

export interface CreateRoomDataAccessAdapter {
  create(key: string,value: string): Promise<string>;
  getAll(key : string, start: number, stop : number ) : Promise<any>;
}

@injectable()
export default class RedisCreateDataList implements CreateRoomDataAccessAdapter {

  create = async (key: string, value : string ): Promise<string> => {
    try {
        const lpush = promisify(redis.lpush).bind(redis);
        const status =  await lpush(key,value);
        return status ? value : null;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getAll = async (key : string , start : number , stop : number) : Promise<any> => {
    try { 
      const lrange = promisify(redis.lrange).bind(this);
      const data =  await lrange(key,start,stop);
      return data;
    }
    catch(error){
      throw new Error(error.message);
    }  
  }

}
