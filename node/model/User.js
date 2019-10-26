const client = require('../config/db');

module.exports = {
    async getUsers(callback){
        client.query('SELECT * FROM pessoa', (err, res) => {
            callback(err, res.rows);
        });
    }
}
