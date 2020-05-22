import React from 'react';
import { useTabuleiroData } from '../../context/TabuleiroData'
import './style.css'

// data => { confirmados:0, suspeitos:0, descartados:0, letais:0 }
function SituacaoAtual() {

  const { referencia, situation } = useTabuleiroData()

  // lembrar que o mês começa com 0
  const dataRef = new Date(
    referencia.ano,
    referencia.mes - 1,
    referencia.dia
  )
  
  return (
    <div className="SituacaoAtual">
      <span><b>Situação Atual</b></span>
      <ul>
        <li id="confirmados">
          Confirmados
          <div className="value" >
            {situation.confirmados}
          </div>
        </li>
        <li id="suspeitos">
          Suspeitos
          <div className="value" >
            {situation.suspeitos}
          </div>
        </li>
        <li id="descartados">
          Descartados
          <div className="value" >
            {situation.descartados}
          </div>
        </li>
        <li id="letais">
          Letais
          <div className="value" >
            {situation.letais}
          </div>
        </li>
        <li>Referencia: {dataRef.toLocaleDateString()}</li>
      </ul>
    </div>
  );
}

export default SituacaoAtual;