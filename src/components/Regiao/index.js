import React from 'react';
import { Tooltip, CircleMarker } from 'react-leaflet';
import './style.css';

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
        <div className="content">
          <span><b>{data.nome}</b></span>
          <ul>
            <li id="confirmados">
              Confirmados
              <div className="value">{confirmados}</div>
            </li>
            <li id="suspeitos">
              Suspeitos
              <div className="value">{suspeitos}</div>
            </li>
            <li id="descartados">
              Descartados
              <div className="value">{descartados}</div>
            </li>
            <li id="letais">
              Letais
              <div className="value">{letais}</div>
            </li>
          </ul>
        </div>
      </Tooltip>
    </CircleMarker>
  );

}

export default Regiao;