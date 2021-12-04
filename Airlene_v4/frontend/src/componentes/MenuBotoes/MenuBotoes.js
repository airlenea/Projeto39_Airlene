import './MenuBotoes.css';

export default function MenuBotoes() {
  return (
    <div className = "menuBotoes">

      <button type="button" id="btnFuncionarios" className="btn btn-secondary">Funcionários</button>
      <button type="button" id="btnPrefeituras" className="btn btn-success">Prefeituras</button>
      <button type="button" id="btnUsuarios" className="btn btn-warning">Usuários</button>
      <button type="button" id="btnConfig" className="btn btn-info">Configurações</button>
      
    </div>
  );
}

