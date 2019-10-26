var express             = require("express"),
    app                 = express(),
    bodyParser          = require('body-parser');

//requiring routes
var indexRoutes         = require("./routes/index");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use("/", indexRoutes);


app.listen(3000, ()=>{
    console.log("ir para localhost:3000");
});