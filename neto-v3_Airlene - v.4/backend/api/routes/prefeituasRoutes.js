const controller = require('../controllers/prefeiturasControllers.js');

server.get('/prefeituras', controller.prefeiturasMenu)

server.get('/prefeituras/listar', controller.prefeiturasGetAll)

server.get('/prefeituras/consultar/:codigo', controller.prefeiturasGetById)

server.get('/prefeituras/ativoInativo/:codigo', controller.prefeiturasAtivoInativo)
