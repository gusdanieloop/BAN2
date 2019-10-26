const { Client } = require("pg");
require('dotenv/config');

const client = new Client();

client.connect();
client.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
})

module.exports = client;
