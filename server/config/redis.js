const redis = require('redis');
require("dotenv").config();

const client = redis.createClient(
  {
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
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
  // console.log(value);
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

exports.del = (key) => {
  client.del(key);
}

exports.scanDel = async (pattern) => {
  try {
    for await (const key of client.scanIterator({
      TYPE: 'string',
      MATCH: pattern,
    })) {
      console.log(key);
      client.del(key);
    }
  } catch (error) {
    console.log("E: ", error);
  }
};

exports.check = async (key) => {
  const CONTROL_NUMBER = await client.exists(key);
  if (CONTROL_NUMBER === 1) return true
  else return false
}


module.exports = {
  ...module.exports,
  client
};