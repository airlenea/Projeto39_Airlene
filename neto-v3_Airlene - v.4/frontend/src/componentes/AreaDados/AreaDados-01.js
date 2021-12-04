import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import Funcionarios from '../Funcionarios/Funcionarios';

import './AreaDados.css';

export default function AreaDados(props) {
  return (
    <div id="idArea" className="areaDados">
      {props.componente}

    </div>
  );
}

