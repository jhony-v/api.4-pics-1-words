import  redis , { RedisClient } from 'redis'

// create client redis
export const redisCache : RedisClient = redis.createClient();