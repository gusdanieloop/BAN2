const client = require('../config/db');

module.exports = {
    async getEventos(callback){
        client.query('SELECT * FROM evento', (err, res) => {
            callback(err, res.rows);
        });
    },

    async getEventoById(id, callback){
        client.query('SELECT * FROM evento WHERE codev = $1 and ativo = $2', [id, true], (err, res) => {
            callback(err, res.rows);
        });
    },

    async createEvento({start, end, descricao}, callback){
        client.query('INSERT INTO evento(horarioComeco, horarioFim, descricao) VALUES($1, $2, $3)', [start, end, descricao], (err, res) => {
            callback(err, res.rows);
        });
    },

    async updateEvento({codev, start, end, descricao}, callback){
        client.query('UPDATE evento SET horarioComeco = $1, horarioFim = $2, descricao = $3 WHERE codev = $4', [start, end, descricao, codev], (err, res) => {
            callback(err, res.rows);
        });
    },

    async deleteEvento(codev, callback){
        client.query('UPDATE evento SET ativo = 0 WHERE codev = $1', [codev], (err, res) => {
            callback(err, res.rows);
        });
    }
}
