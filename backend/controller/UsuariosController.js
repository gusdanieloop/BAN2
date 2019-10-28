const User = require('../model/User')
var jwt = require('jsonwebtoken');
const jwtKey = 'my_secret_key'

module.exports = {
    async autentication(req, res) {
        const { cpf, senha } = req.body;
        console.log(cpf)
        console.log(req.params)
        User.getAutentication(cpf, (err, usuario) => {

            if (err) {
                res.json({ success: false, msg: err })
            }
            else {
                if (senha != usuario.senha) {
                    err = "Senha Incorreta"
                    res.json({ success: false, msg: err })
                } else {
                    let usuariId = usuario.id
                    var token = jwt.sign({ usuariId }, jwtKey, {
                        algorithm: 'HS256',
                        expiresIn: 1000
                    });
                    msg = "Autenticado com sucesso"
                    res.json({ success: true, msg, token })
                }
            }

        })

    },

    async showUsers(req, res) {
        User.getUsers((err, usuarios) => {
            if (err)
                console.log(err)
            res.json(usuarios)
        });

    },

    async showUserById(req, res) {
        const { id } = req.body;
        User.getUserById(id, (err, usuario) => {
            if (err)
                console.log(err)
            console.log(usuario)
            res.json(usuario)
        });
    },

    async createUser(req, res) {
        const { nome, cpf, senha, tipo } = req.body;
        User.createUser({ nome, cpf, senha, tipo }, (err, resposta) => {
            if (err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async updateUser(req, res) {
        const { nome, cpf, senha, tipo, codp } = req.body;
        User.updateUser({ nome, cpf, senha, codt, codp }, (err, resposta) => {
            if (err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async deleteUser(req, res) {
        const { codp } = req.body;
        User.deleteUser(codp, (err, resposta) => {
            if (err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        })
    }
}
