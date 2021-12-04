const controller = require('../controllers/funcionariosControllers.js');

server.get('/funcionarios', controller.funcionariosGetAll)
server.get('/funcionarios/:codigo', controller.funcionariosGetById)

server.put('/funcionarios/ativoInativo/:codigo', controller.funcionariosAtivoInativo)

server.put('/a/funcionarios/:codigo', controller.funcionariosEditar)
server.post('/funcionarios', controller.funcionariosNovo)
