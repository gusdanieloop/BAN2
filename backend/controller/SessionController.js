const User = require('../model/User')

module.exports = {
    async showUsers(req, res){
        User.getUsers((err,usuarios) => {
            if(err)
                console.log(err)
            console.log(usuarios)
            res.json(usuarios)
        })

    }
}
