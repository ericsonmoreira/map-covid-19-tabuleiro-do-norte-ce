import React from 'react';
import { useTabuleiroData } from '../../context/TabuleiroData'
import './style.css'

// data => { confirmados:0, suspeitos:0, descartados:0, letais:0 }
function SituacaoAtual() {

  const [referencia, situation] = useTabuleiroData()

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
        <li id="confirmados">Confirmados: {situation.confirmados}</li>
        <li id="suspeitos">Suspeitos: {situation.suspeitos}</li>
        <li id="descartados">Descartados: {situation.descartados}</li>
        <li id="letais">Letais: {situation.letais}</li>
        <li>Referencia: {dataRef.toLocaleDateString()}</li>
      </ul>
    </div>
  );
}

export default SituacaoAtual;