var express             = require("express"),
    app                 = express(),
    bodyParser          = require('body-parser'),
    {Pool}              = require("pg");

//conection db
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'BAN02',
    port: 5432,
});

pool.on('connect', ()=>{
    console.log('Conexão estabelecida com o banco!');
});

//routes
var indexRoutes         = require("./routes/index");

app.use("/", indexRoutes);


app.use(bodyParser.urlencoded({extended: true}));
app.use("view engine", "ejs");


/*pool.query('SELECT NOW()', (err, res)=>{
    console.log(err, res);
    pool.end();
});*/

app.listen(3000, ()=>{
    console.log("ir para localhost:3000");
});