import { injectable } from "inversify";
import { CommandAddDataAdapter } from "../../adapters/CommandsDatabase.adapter";
import redis from "../../../../configuration/redis.config";

@injectable()
export default class RedisAddDataRepository implements CommandAddDataAdapter{
    add(key,data){
        // redis.hset("room",[key,JSON.stringify(data)],(error : Error,reply : number) => {
        //     console.log(reply);
        // })
    }
}