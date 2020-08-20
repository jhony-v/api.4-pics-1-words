import redisClient from "redis";

const redis = redisClient.createClient();
redis.on("error", () => {
  console.log("error connected");
});
redis.on("connect", () => {
  console.log("connected");
});
export default redis;
