const Evento = require('../model/Evento')

module.exports = {
    async showEventos(req, res){
        Evento.getEventos((err,eventos) => {
            if(err)
                console.log(err)
            console.log(eventos)
            res.json(eventos)
        });

    },

    async showEventoById(req, res){
        const {id} = req.body;
        Evento.getEventoById(id, (err, evento) => {
            if(err)
                console.log(err)
            console.log(evento)
            res.json(evento)
        });
    },

    async createEvento(req, res){
        const {start, end, descricao} = req.body;
        Evento.createEvento({start, end, descricao}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async updateEvento(req, res){
        const {codev, start, end, descricao} = req.body;
        Evento.updateEvento({codev, start, end, descricao}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async deleteEvento(req, res){
        const {codev} = req.body;
        Evento.deleteEvento(codev, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        })
    }
}
