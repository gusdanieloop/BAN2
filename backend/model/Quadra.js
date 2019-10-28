const client = require('../config/db');

module.exports = {
    async getQuadras(callback){
        client.query('SELECT * FROM quadra', (err, res) => {
            callback(err, res.rows);
        });
    },

    async getQuadraById(id, callback){
        client.query('SELECT * FROM quadra WHERE codq = $1 and ativo = $2', [id, true], (err, res) => {
            callback(err, res.rows);
        });
    },

    async createQuadra({dias}, callback){
        client.query('INSERT INTO quadra(diasPreAgendamento) VALUES($1)', [dias], (err, res) => {
            callback(err, res.rows);
        });
    },

    async updateQuadra({dias, codq}, callback){
        client.query('UPDATE quadra SET diasPreAgendamento = $1 WHERE codq = $2', [dias, codq], (err, res) => {
            callback(err, res.rows);
        });
    },

    async deleteQuadra(codq, callback){
        client.query('UPDATE quadra SET ativo = 0 WHERE codq = $1', [codq], (err, res) => {
            callback(err, res.rows);
        });
    }
}
