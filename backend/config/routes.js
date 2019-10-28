const express  = require('express');
const router   = express.Router();

const db       = require('../config/db');
const SessionController = require('../controller/SessionController');
const AgendamentoController = require('../controller/AgendamentoController');
const EventoController = require('../controller/EventoController');
const PermissaoController = require('../controller/PermissaoController');
const QuadraController = require('../controller/QuadraController');
const TipoController = require('../controller/TipoController');
const UsuariosController = require('../controller/UsuariosController');

router.get('/', (req, res)=> {
    res.send('raiz');
});

//rotas agendamento
router.get('/agendamentos', AgendamentoController.showAgendamentos);
router.get('/agendamentoById', AgendamentoController.showAgendamentosById);
router.post('/createAgendamento', AgendamentoController.createAgendamento);
router.post('/updateAgendamento', AgendamentoController.updateAgendamento);
router.post('/deleteAgendamento', AgendamentoController.deleteAgendamento);

//rotas evento
router.get('/eventos', EventoController.showEventos);
router.get('/eventoById', EventoController.showEventoById);
router.post('/createEvento', EventoController.createEvento);
router.post('/updateEvento', EventoController.updateEvento);
router.post('/deleteEvento', EventoController.deleteEvento);

//rotas permissao
router.get('/permissoes', PermissaoController.showPermissoes);
router.get('/userById', PermissaoController.showPermissoesById);
router.post('/createUser', PermissaoController.createPermissao);
router.post('/updateUser', PermissaoController.updatePermissao);
router.post('/deleteUser', PermissaoController.deletePermissao);

//rotas quadra
router.get('/quadras', QuadraController.showQuadras);
router.get('/quadraById', QuadraController.showQuadraById);
router.post('/createQuadra', QuadraController.createQuadra);
router.post('/updateQuadra', QuadraController.updateQuadra);
router.post('/deleteQuadra', QuadraController.deleteQuadra);

//rotas tipo
router.get('/tipos', TipoController.showTipos);
router.get('/tipoById', TipoController.showTiposById);
router.post('/createTipo', TipoController.createTipo);
router.post('/updateTipo', TipoController.updateTipo);
router.post('/deleteTipo', TipoController.deleteTipo);

//rotas user
router.get('/users', UsuariosController.showUsers);
router.post('/autentication', UsuariosController.autentication);

router.get('/userById', UsuariosController.showUserById);
router.post('/createUser', UsuariosController.createUser);
router.post('/updateUser', UsuariosController.updateUser);
router.post('/deleteUser', UsuariosController.deleteUser);



module.exports = router;
