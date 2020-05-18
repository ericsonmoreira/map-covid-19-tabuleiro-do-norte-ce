import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet'
import { useTabuleiroData } from './context/TabuleiroData'
import Regiao from './components/Regiao';
import SituacaoAtual from './components/SituacaoAtual';

const center = [-5.2482901, -38.1303705]
const zoom = 12

function App() {

  const [regions] = useTabuleiroData()

  return (
    <div className="App">
      {/* zoomControl false para desabilitar o zoom na posição padão */}
      <Map center={center} zoom={zoom} zoomControl={false}>
        <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="bottomright" />

        {regions.map((region, index) => (
          <Regiao key={index} data={region} />
        ))}


        <SituacaoAtual />

        {/* <Menu /> */}


        {/* <Info /> */}

      </Map >
    </div>
  );

}

export default App;
