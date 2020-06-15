import  redis , { RedisClient } from 'redis'

// create client redis
export const client : RedisClient = redis.createClient();
