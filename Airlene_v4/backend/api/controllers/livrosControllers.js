const models = require('../models/livrosModels.js');

module.exports = {
    livrosMenu,
    livrosGetAll,
    livrosGetById,
    livrosAtivoInativo        
}

function livrosMenu(req, res) {
    res.json('Rota Livros Encontrada!!!');
    console.log('Rota Livros Encontrada!!!');
}

function livrosGetAll(req, res) {
    console.log('Listar Livros {M O D E L}');
    models.getAllLivros(function(err, resposta) {
        console.log('Retorno de Livros {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })  
}


function livrosGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdLivros(id, function(err, resposta) {
        console.log('Retorno de Livros Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function livrosAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Livros { M O D E L }')    
    console.log('Ativar/Inativar Livros { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdLivros(id, function(err, resposta) {
        console.log('Retorno de Livros Id {M O D E L}', resposta)
        let p_ativo = resposta[0].liv_ativoinativo
        if(err) {
            throw err;
        } else {
            if( p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function(err, result){
            if(err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
//            res.redirect('/autores/consultar/' + id);
        })
    })
}

