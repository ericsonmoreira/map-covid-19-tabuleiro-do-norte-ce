import React from 'react';
import { useTabuleiroData } from '../../context/TabuleiroData'
import {
  Container,
  casesColors,
  Title,
  CovidCases,
  CovidCase,
  CaseLabel,
  CaseQuant,
  DataRef,
  DataRefLabel,
  DataRefValue,
} from './styles'

function SituacaoAtual() {

  const { referencia, situation } = useTabuleiroData()

  const { confirmados, suspeitos, descartados, letais } = situation

  // lembrar que o mês começa com 0
  const dataRef = new Date(
    referencia.ano,
    referencia.mes - 1,
    referencia.dia
  )

  return (
    <Container>
      <Title>Situação Atual</Title>
      <CovidCases>
        <CovidCase color={casesColors.confirmados}>
          <CaseLabel>Confirmados</CaseLabel>
          <CaseQuant>{confirmados}</CaseQuant>
        </CovidCase>
        <CovidCase color={casesColors.suspeitos}>
          <CaseLabel>Suspeitos</CaseLabel>
          <CaseQuant>{suspeitos}</CaseQuant>
        </CovidCase>
        <CovidCase color={casesColors.descartados}>
          <CaseLabel>Descartados</CaseLabel>
          <CaseQuant>{descartados}</CaseQuant>
        </CovidCase>
        <CovidCase color={casesColors.letais}>
          <CaseLabel>Letais</CaseLabel>
          <CaseQuant>{letais}</CaseQuant>
        </CovidCase>
      </CovidCases>
      <DataRef>
        <DataRefLabel>Referencia:</DataRefLabel>
        <DataRefValue>{dataRef.toLocaleDateString()}</DataRefValue>
      </DataRef>
    </Container>
  );
}

export default SituacaoAtual;