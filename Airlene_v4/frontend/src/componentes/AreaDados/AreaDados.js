import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Funcionarios from '../Funcionarios/Funcionarios.js';
import FuncionariosEditar from '../Funcionarios/FuncionariosEditar.js'

import './AreaDados.css';

export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/funcionarios" component={Funcionarios}></Route>
        <Route exact path="/funcionarios/:idFuncionario"
          component={FuncionariosEditar}></Route>
      </Switch>

    </div>
  );
}


