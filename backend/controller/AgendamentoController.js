const Agendamento = require('../model/Agendamento')

module.exports = {
    async showAgendamentos(req, res){
        Agendamento.getAgendamentos((err,agendamentos) => {
            if(err)
                console.log(err)
            console.log(agendamentos)
            res.json(agendamentos)
        });

    },

    async showAgendamentosById(req, res){
        const {id} = req.body;
        Agendamento.getAgendamentoById(id, (err, agendamento) => {
            if(err)
                console.log(err)
            console.log(agendamento)
            res.json(agendamento)
        });
    },

    async createAgendamento(req, res){
        const {pessoa, quadra, descricao, comparecimento, comeco, fim} = req.body;
        Agendamento.createAgendamento({pessoa, quadra, descricao, comparecimento, comeco, fim}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async updateAgendamento(req, res){
        const {pessoa, quadra, descricao, comparecimento, comeco, fim, coda} = req.body;
        Agendamento.updateAgendamento({pessoa, quadra, descricao, comparecimento, comeco, fim, coda}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async deleteAgendamento(req, res){
        const {coda} = req.body;
        Agendamento.deleteAgendamento(coda, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        })
    }
}
