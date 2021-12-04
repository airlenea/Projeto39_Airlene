const conexao = require('../../config/conexao.js');

module.exports = {
    getAllLivros,
    getByIdLivros,
    ativarInativar        
}

function getAllLivros (callback) {
//    conexao.query('select * from livros', callback)
    conexao.query('select A.*, B.aut_apelido, B.aut_nome, C.edt_nome from livros A left join autores B on A.aut_codigo = B.aut_codigo left join editoras C on A.edt_codigo = C.edt_codigo ', callback)    
}

function getByIdLivros (id, callback) {
    conexao.query('select * from livros WHERE liv_codigo = ' + id, callback)
}



















function ativarInativar (id, ativo, callback) {
    console.log('Livros Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update livros set liv_ativoinativo = '" + ativo + "' where liv_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Livros Ativando/Inativando Registro ' + id + " - Status: " + ativo)
    
}

