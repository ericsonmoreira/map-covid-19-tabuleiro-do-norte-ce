import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet'

import * as data from '../tabueiro_data.json'
import Regiao from './components/Regiao';
import SituacaoAtual from './components/SituacaoAtual';

const center = [-5.2482901, -38.1303705]
const zoom = 12

function App() {

  data.situation = () => {
    const atual = { confirmados: 0, suspeitos: 0, descartados: 0, letais: 0 }
    data.regions.forEach(region => {
      atual.confirmados += region.casos.confirmados
      atual.suspeitos += region.casos.suspeitos
      atual.descartados += region.casos.descartados
      atual.letais += region.casos.letais
    });
    return atual
  }

  return (
    <div className="App">
      {/* zoomControl false para desabilitar o zoom na posição padão */}
      <Map center={center} zoom={zoom} zoomControl={false}>
        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {data.regions.map((region, index) => (
          <Regiao key={index} data={region} />
        ))}

        <ZoomControl position="bottomright" />

        {/* <Menu /> */}

        <SituacaoAtual
          data={data.situation()}
          referencia={data.referencia}
        />

      </Map >

    </div>
  );

}

export default App;
