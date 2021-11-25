const express = require("express");
const redis = require("redis");
const PORT = 8080;
const app = express();

const redisClient = redis.createClient({
  host: "redis-server",
  port: 6379,
});

redisClient.set("number", 0);

app.get("/", async (req, res) => {
  redisClient.get("number", (err, number) => {
    if (err) return res.send("ERROR");

    redisClient.set("number", +number + 1);
    res.send(`새로고침할 때 마다 숫자가 1씩 올라갑니다!!! ${number}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is Running ${PORT}!!!`);
});
