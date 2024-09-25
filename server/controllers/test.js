const redis = require('redis');
require("dotenv").config();

const client = redis.createClient(
  {
    url: `redis://127.0.0.1:6379`
  }
);

client.connect();

client.on('connect', () => {
  console.log('Redis Connection: SUCCESS');
});

client.on('error', (err) => {
  console.log(`Redis Error: ${err}`);
});

exports.putJSON = (key, value, ttl) => {
  console.log(value);
  return client.set(key, JSON.stringify(value), { EX: ttl })
    .then(() => {
      // console.log(a);
      return true;
    }).catch((err) => {
      console.log("redis/put ERROR: ", err);
      return false;
    })
}

exports.getJSON = (key) => {
  return client.get(key).then((data) => {
    return JSON.parse(data);
  }).catch((err) => {
    console.log(err);
    return false;
  })
}

const del = (key) => {
  client.del(key);
}

exports.check = async (key) => {
  const CONTROL_NUMBER = await client.exists(key);
  // console.log(CONTROL_NUMBER)
  if (CONTROL_NUMBER === 1) return true
  else return false
}

del();


module.exports = {
  ...module.exports,
  client
};