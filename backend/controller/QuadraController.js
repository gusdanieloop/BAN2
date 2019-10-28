const Quadra = require('../model/Quadra')

module.exports = {
    async showQuadras(req, res){
        Quadra.getQuadras((err,quadras) => {
            if(err)
                console.log(err)
            console.log(quadras)
            res.json(quadras)
        });

    },

    async showQuadraById(req, res){
        const {id} = req.body;
        Quadra.getQuadraById(id, (err, quadra) => {
            if(err)
                console.log(err)
            console.log(quadra)
            res.json(quadra)
        });
    },

    async createQuadra(req, res){
        const {dias} = req.body;
        Quadra.createQuadra(dias, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async updateQuadra(req, res){
        const {codq, dias} = req.body;
        Quadra.updateQuadra({dias, codq}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async deleteQuadra(req, res){
        const {codq} = req.body;
        Quadra.deleteQuadra(codq, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        })
    }
}
