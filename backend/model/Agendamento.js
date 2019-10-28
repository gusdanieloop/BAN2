const client = require('../config/db');

module.exports = {
    async getAgendamentos(callback){
        client.query('SELECT * FROM agendamento', (err, res) => {
            callback(err, res.rows);
        });
    },

    async getAgendamentoById(id, callback){
        client.query('SELECT * FROM agendamento WHERE coda = $1 and ativo = $2', [id, true], (err, res) => {
            callback(err, res.rows);
        });
    },

    async createAgendamento({pessoa, quadra, descricao, comparecimento, comeco, fim}, callback){
        client.query('INSERT INTO agendamento(codp, codq, descricao, comparecimento, horarioComeco, horarioFim) VALUES($1, $2, $3, $4, $5, $6)', [pessoa, quadra, descricao, comparecimento, comeco, fim], (err, res) => {
            callback(err, res.rows);
        });
    },

    async updateAgendamento({pessoa, quadra, descricao, comparecimento, comeco, fim, coda}, callback){
        client.query('UPDATE agendamento SET codp = $1, codq = $2, descricao = $3, comparecimento = $4, horarioComeco = $5, horarioFim = $6 WHERE coda = $7', [pessoa, quadra, descricao, comparecimento, comeco, fim, coda], (err, res) => {
            callback(err, res.rows);
        });
    },

    async deleteAgendamento(coda, callback){
        client.query('UPDATE agendamento SET ativo = 0 WHERE coda = $1', [coda], (err, res) => {
            callback(err, res.rows);
        });
    }
}
