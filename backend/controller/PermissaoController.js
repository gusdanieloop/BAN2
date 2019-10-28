const Permissao = require('../model/Permissao')

module.exports = {
    async showPermissoes(req, res){
        Permissao.getPermissoes((err,permissoes) => {
            if(err)
                console.log(err)
            console.log(permissoes)
            res.json(permissoes)
        });

    },

    async showPermissoesById(req, res){
        const {id} = req.body;
        Permissao.getPermissaoById(id, (err, permissao) => {
            if(err)
                console.log(err)
            console.log(permissao)
            res.json(permissao)
        });
    },

    async createPermissao(req, res){
        const {pessoa, quadra} = req.body;
        Permissao.createPermissao({pessoa, quadra}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async updatePermissao(req, res){
        const {codperm, pessoa, quadra} = req.body;
        Permissao.updatePermissao({codperm, pessoa, quadra}, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        });
    },

    async deletePermissao(req, res){
        const {codperm} = req.body;
        Permissao.deletePermissao(codperm, (err, resposta) => {
            if(err)
                console.log(err)
            console.log(resposta)
            res.json(resposta)
        })
    }
}
