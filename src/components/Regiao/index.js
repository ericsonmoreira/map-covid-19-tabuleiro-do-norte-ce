import React from 'react';
import { Tooltip, CircleMarker } from 'react-leaflet';
import {
  casesColors,
  TooltipContent,
  Title,
  CovidCases,
  CovidCase,
  CaseLabel,
  CaseQuant,
} from './styles'

function Regiao({ data }) {

  const { confirmados, suspeitos, descartados, letais } = data.casos

  // Calcula tamanho do diâmetro do círculo
  const _handleRadius = () => {
    return ((3 * confirmados + 2 * suspeitos + descartados + 5 * letais) / 4) + 6
  }

  /**
   * Trata de calcular a cor que vai mostrar.
   * A cor varia de verde pra vermelho de acordo com o valor do radius
   */
  const _handleColor = () => {
    const radius = _handleRadius()
    return `rgb(${radius * radius}, ${255 - radius * radius}, 0)`
  }

  return (
    <CircleMarker
      key={data.id}
      center={data.localization}
      color={_handleColor()}
      radius={_handleRadius()} >
      <Tooltip className="Tooltip">
        <TooltipContent>
          <Title>{data.nome}</Title>
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
        </TooltipContent>
      </Tooltip>
    </CircleMarker>
  );

}

export default Regiao;