const Tipo = require('../model/Tipo')

module.exports = {
    async showTipos(req, res){
        Tipo.getTipos((err,tipos) => {
            if(err)
                console.log(err)
            console.log(tipos)
            res.json(tipos)
        });

    },

    async showTiposById(req, res){
        const {id} = req.body;
        Tipo.getTiposById(id, (err, tipo) => {
            if(err)
                console.log(err)
            console.log(tipo)
            res.json(tipo)
        });
    },

    async createTipo(req, res){
        const {nome} = req.body;
        Tipo.createTipo({nome}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async updateTipo(req, res){
        const {codt, nome} = req.body;
        Tipo.updateTipo({codt, nome}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async deleteTipo(req, res){
        const {codt} = req.body;
        Tipo.deleteTipo(codt, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        })
    }
}
