import React from 'react';
import './Funcionarios.css';

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaFuncionarios.js";

import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Funcionarios() {

  const [funcionarios, setFuncionario] = useState([])

  useEffect(() => {
    urlapi.get('funcionarios')
      .then(response => setFuncionario(response.data));
  }, []
  )

  return (
    <>
        <div id="idFuncionarios" className="funcionarios">
          <div id="corpo_rel">
            <legend> Registros de Funcionários Cadastrados</legend>
            <Link to="/funcionarios/0" value={'I'}>incluir Novo Funcionario</Link>

            <div>

              <Tabela
                items={funcionarios}
                chave={'/funcionarios/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Funcionarios;
