const User = require('../model/User')

module.exports = {
    async showUsers(req, res){
        console.log(req.query)
        User.getUsers((err,users) => {
            if(err)
                console.log(err)
            res.json(users)
        })


    }
}
