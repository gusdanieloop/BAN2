var express = require('express'),
    router  = express.Router();

//home page route
router.get("/", (req, res)=>{
    res.render("home");
});

module.exports = router;