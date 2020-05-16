import React from 'react';

import './style.css'

// data => { confirmados:0, suspeitos:0, descartados:0, letais:0 }
function SituacaoAtual({ data }) {
  return (
    <div className="SituacaoAtual">
      <span>Situação Atual</span>
      <ul>
        <li id="confirmados">Confirmados: {data.confirmados }</li>
        <li id="suspeitos">Suspeitos: {data.suspeitos }</li>
        <li id="descartados">Descartados: {data.descartados }</li>
        <li id="letais">Letais: {data.letais }</li>
      </ul>
    </div>
  );
}

export default SituacaoAtual;