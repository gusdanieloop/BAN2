const express    = require("express");
const app        = express();
const bodyParser = require('body-parser');

const routes     = require("./config/routes");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(routes);

app.listen(3000, ()=>{
    console.log("locahost:3000");
});
