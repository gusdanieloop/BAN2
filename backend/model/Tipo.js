const client = require('../config/db');

module.exports = {
    async getTipos(callback){
        client.query('SELECT * FROM tipo', (err, res) => {
            callback(err, res.rows);
        });
    },

    async getTiposById(id, callback){
        client.query('SELECT * FROM tipo WHERE codt = $1 and ativo = $2', [id, true], (err, res) => {
            callback(err, res.rows);
        });
    },

    async createTipo(nome, callback){
        client.query('INSERT INTO tipo(nome) VALUES($1)', [nome], (err, res) => {
            callback(err, res.rows);
        });
    },

    async updateTipo({codt, nome}, callback){
        client.query('UPDATE tipo SET nome = $1 WHERE codt = $2', [codt, nome], (err, res) => {
            callback(err, res.rows);
        });
    },

    async deleteTipo(codt, callback){
        client.query('UPDATE tipo SET ativo = 0 WHERE codt = $1', [codt], (err, res) => {
            callback(err, res.rows);
        });
    }
}
