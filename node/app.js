var express             = require("express");
const {Pool, Client}    = require("pg");

var app = express();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'BAN02',
    port: 5432,
});

/*pool.query('SELECT NOW()', (err, res)=>{
    console.log(err, res);
    pool.end();
});*/

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'BAN02',
    port: 5432,
});
client.connect();

/*client.query('SELECT * FROM aulas.cliente', (err, res)=>{
    console.log(res);
    client.end();
});*/

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});