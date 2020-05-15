import React from 'react';
import { Tooltip, CircleMarker } from 'react-leaflet';

import './style.css';

function Regiao({ data }) {

  // Tratar a cor da esfera
  const _handleColor = () => {
    const radius = _handleRadius() 
    
    return "green"
  }

  const _handleRadius = () => {
    const confirmados = data.casos.confirmados
    const suspeitos = data.casos.suspeitos
    const descartados = data.casos.descartados
    const letais = data.casos.letais
    return ((3 * confirmados + 2 * suspeitos + descartados + 5 * letais) / 4) + 6
  }

  return (
    <CircleMarker
      key={data.id}
      center={data.localization}
      color={_handleColor()} 
      radius={_handleRadius()} >
      <Tooltip className="Tooltip">
        <h3>{data.nome}</h3>
        <h4>Casos</h4>
        <ul>
          <li>Confirmados: {data.casos.confirmados}</li>
          <li>Suspeitos: {data.casos.suspeitos}</li>
          <li>Descartados: {data.casos.descartados}</li>
          <li>Letais: {data.casos.letais}</li>
        </ul>
      </Tooltip>
    </CircleMarker>
  );

}

export default Regiao;