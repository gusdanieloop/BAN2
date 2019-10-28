const client = require('../config/db');

module.exports = {
    async getPermissoes(callback){
        client.query('SELECT * FROM permissoes', (err, res) => {
            callback(err, res.rows);
        });
    },

    async getPermissaoById(id, callback){
        client.query('SELECT * FROM permissoes WHERE codperm = $1 and ativo = $2', [id, true], (err, res) => {
            callback(err, res.rows);
        });
    },

    async createPermissao({pessoa, quadra}, callback){
        client.query('INSERT INTO permissoes(codp, codq) VALUES($1, $2)', [pessoa, quadra], (err, res) => {
            callback(err, res.rows);
        });
    },

    async updatePermissao({codperm, pessoa, quadra}, callback){
        client.query('UPDATE permissoes SET codp = $2, codq = $3 WHERE codperm = $1', [codperm, pessoa, quadra], (err, res) => {
            callback(err, res.rows);
        });
    },

    async deletePermissao(codperm, callback){
        client.query('UPDATE agendamento SET ativo = 0 WHERE codperm = $1', [codperm], (err, res) => {
            callback(err, res.rows);
        });
    }
}
