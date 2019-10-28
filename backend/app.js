const express    = require("express");
const app        = express();
const cors         = require('cors');
const bodyParser = require('body-parser');

const routes     = require("./config/routes");







app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
app.use(routes);

app.listen(4000, ()=>{
    console.log("locahost:4000");
});
