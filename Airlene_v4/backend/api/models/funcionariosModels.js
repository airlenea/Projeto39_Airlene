const conexao = require('../../config/conexao.js');

module.exports = {
    getAllFuncionarios,
    getByIdFuncionarios,
    ativarInativar,
    editarFuncionarios,
    novoFuncionario           
}

function getAllFuncionarios (callback) {
    conexao.query('select * from funcionarios', callback)
}

function getByIdFuncionarios (id, callback) {
    conexao.query('select * from funcionarios WHERE fun_codigo = ' + id, callback)
}

function ativarInativar (id, ativo, callback) {
    console.log('Funcionarios Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update funcionarios set fun_ativoinativo = '" + ativo + "' where fun_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Funcionarios Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
}

function novoFuncionario(dados, callback) {
    var msql = 'INSERT INTO autores SET ? ';

	conexao.query(msql, dados, callback);
}

function editarFuncionarios(dados, callback) {
    console.log('Estou alterando o funcionario { M O D E L } .......' + dados);

    var msql = "UPDATE funcionarios SET fun_nome = '" + dados.fun_nome + 
    "' , fun_ativoinativo = '" + dados.fun_ativoinativo +     
    "' , fun_cargo        = '" + dados.fun_cargo + 
    "' , fun_depto        = '" + dados.fun_depto + 
    "' , fun_registro     = '" + dados.aut_telefone + 
    "'  WHERE fun_codigo  = '" + dados.fun_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}


