import React from 'react';
import { Tooltip, CircleMarker } from 'react-leaflet';

import './style.css';

function Regiao({ data }) {

  const _handleRadius = () => {
    const confirmados = data.casos.confirmados
    const suspeitos = data.casos.suspeitos
    const descartados = data.casos.descartados
    const letais = data.casos.letais
    return ((3 * confirmados + 2 * suspeitos + descartados + 5 * letais) / 4) + 6
  }

  /**
   * Trata de calcular a cor que vai mostrar.
   * A cor varia de verde pra vermelho de acordo com o valor do radius
   */
  const _handleColor = () => {
    const radius = _handleRadius()
    return `rgb(${radius * radius}, 120, 0)`
  }

  return (
    <CircleMarker
      key={data.id}
      center={data.localization}
      color={_handleColor()}
      radius={_handleRadius()} >
      <Tooltip className="Tooltip">
        <div>
          <span>{data.nome}</span>
          <ul>
            <li id="confirmados">Confirmados: {data.casos.confirmados}</li>
            <li id="suspeitos">Suspeitos: {data.casos.suspeitos}</li>
            <li id="descartados">Descartados: {data.casos.descartados}</li>
            <li id="letais">Letais: {data.casos.letais}</li>
          </ul>
        </div>
      </Tooltip>
    </CircleMarker>
  );

}

export default Regiao;