const express    = require("express");
const app        = express();
var cors = require('cors');
//const bodyParser = require('body-parser');

const routes     = require("./config/routes");

//app.use(bodyParser.urlencoded({extended: true}));
//app.set("view engine", "ejs");
//app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*');
  //next();
//});
app.use(cors())
app.use(routes);
app.use(express.json())
app.listen(3000, ()=>{
    console.log("locahost:3000");
});
