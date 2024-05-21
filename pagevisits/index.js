const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server', // Host should be a DNS name, But we can acutally use a Docker-compose service name
    port: 6379 // Default Redis port
});

const REDIS_KEY = 'visits'
const PORT = 8081;

client.set(REDIS_KEY, 0); // Set a zero-value for visits.

app.get('/', (_request, response) => {
    process.exit(0)
    client.get(REDIS_KEY, (_err, visits) => {
        response.send('Number of visits is ' + visits)
        client.set(REDIS_KEY, parseInt(visits) + 1)
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
