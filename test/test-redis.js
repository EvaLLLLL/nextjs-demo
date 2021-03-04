const Redis = require("ioredis");

const test = async () => {
  const redis = new Redis();

  const keys = await redis.keys("*");
  console.log(keys);

  await redis.set("a", 123);

  console.log(await redis.get("a"));
};

test();
