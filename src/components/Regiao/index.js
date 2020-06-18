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
    return ((3 * confirmados + 2 * suspeitos + descartados + 5 * letais) / 4) + 4
  }

  /**
   * Trata de calcular a cor que vai mostrar.
   */
  const _handleColor = () => {
    const radius = Math.pow(_handleRadius(), 2);
    return radius > 1000 ? '#800026' :
      radius > 500 ? '#BD0026' :
        radius > 200 ? '#E31A1C' :
          radius > 100 ? '#FC4E2A' :
            radius > 50 ? '#FD8D3C' :
              radius > 20 ? '#FEB24C' :
                radius > 10 ? '#FED976' :
                  '#FFEDA0';
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