import React from 'react';

import './style.css'


// data => { confirmados:0, suspeitos:0, descartados:0, letais:0 }
function SituacaoAtual({ data }) {
  return (
    <div className="SituacaoAtual">
      Situação atual:
      <ul>
        <li>Confirmados: {data.confirmados }</li>
        <li>Suspeitos: {data.suspeitos }</li>
        <li>Descartados: {data.descartados }</li>
        <li>Letais: {data.letais }</li>
      </ul>
    </div>
  );
}

export default SituacaoAtual;