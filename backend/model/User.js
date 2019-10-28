const client = require('../config/db');

module.exports = {
    async getUsers(callback){
        client.query('SELECT * FROM pessoa', (err, res) => {
            callback(err, res.rows);
        });
    },

    async getUserById(id, callback){
        client.query('SELECT * FROM pessoa WHERE codp = $1', [id], (err, res) => {
            callback(err, res.rows);
        });
    },

    async createUser({nome, cpf, senha, tipo}, callback){
        client.query('INSERT INTO pessoa(nome, cpf, senha, codt) VALUES($1, $2, $3, $4)', [nome, cpf, senha, tipo], (err, res) => {
            callback(err, res.rows);
        })
    },
    async updateUser({nome, cpf, senha, codt, codp}, callback){
        client.query('UPDATE pessoa SET nome = $1, cpf = $2, senha = $3, codt = $4 WHERE codp = $5', [nome, cpf, senha, codt, codp], (err, res)=> {
            callback(err, res.rows);
        });
    },

    async deleteUser(codp, callback){
        client.query('UPDATE pessoa SET ativo = 0 WHERE codp = $1', [codp], (err, res) => {
            callback(err, res.rows);
        });
    }
}
