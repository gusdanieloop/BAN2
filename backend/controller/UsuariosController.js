const User = require('../model/User')

module.exports = {
    async showUsers(req, res){
        User.getUsers((err,usuarios) => {
            if(err)
                console.log(err)
            console.log(usuarios)
            res.json(usuarios)
        });

    },

    async showUserById(req, res){
        const {id} = req.body;
        User.getUserById(id, (err, usuario) => {
            if(err)
                console.log(err)
            console.log(usuario)
            res.json(usuario)
        });
    },

    async createUser(req, res){
        const {nome, cpf, senha, tipo} = req.body;
        User.createUser({nome, cpf, senha, tipo}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async updateUser(req, res){
        const {nome, cpf, senha, tipo, codp} = req.body;
        User.updateUser({nome, cpf, senha, codt, codp}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async deleteUser(req, res){
        const {codp} = req.body;
        User.deleteUser(codp, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        })
    }
}
