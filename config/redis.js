// const redis = require("redis");

// const redisClient = redis.createClient({
//   url: process.env.REDIS_URI,
// });

// redisClient.on("error", (err) => console.error("Redis Client Error", err));

// const connectRedis = async () => {
//   try {
//     await redisClient.connect();
//     console.log("Redis connected successfully");
//   } catch (error) {
//     console.error("Redis connection failed:", error.message);
//   }
// };

// module.exports = { redisClient, connectRedis };
const redis = require("redis");

const redisClient = redis.createClient({
  url: "redis://localhost:6379", // Default Redis URL
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log("Connected to Redis successfully");
  } catch (error) {
    console.error("Failed to connect to Redis:", error.message);
    process.exit(1); // Exit the process on connection failure
  }
};

module.exports = { redisClient, connectRedis };
