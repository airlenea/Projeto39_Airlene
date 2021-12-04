const models = require('../models/prefeiturasModels.js');

module.exports = {
    prefeiturasMenu,
    prefeiturasGetAll,
    prefeiturasGetById,
    prefeiturasAtivoInativo
}

function prefeiturasMenu(req, res) {
    res.json('Rota Prefeituras Encontrada!!!');
    console.log('Rota Prefeituras Encontrada!!!');
}

function prefeiturasGetAll(req, res) {
    console.log('Listar Prefeituras {M O D E L}');
    models.getAllPrefeituras(function (err, resposta) {
        console.log('Retorno de Prefeituras {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function prefeiturasGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdPrefeituras(id, function (err, resposta) {
        console.log('Retorno de Prefeituras Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function prefeiturasAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Editoras { M O D E L }')
    console.log('Ativar/Inativar Editoras { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdPrefeituras(id, function (err, resposta) {
        console.log('Retorno de Prefeituras Id {M O D E L}', resposta)
        let p_ativo = resposta[0].pre_ativoinativo
        if (err) {
            throw err;
        } else {
            if (p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function (err, result) {
            if (err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
            //            res.redirect('/autores/consultar/' + id);
        })
    })
}

