import React from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet'
import { useTabuleiroData } from './context/TabuleiroData'
import Regiao from './components/Regiao';
import SituacaoAtual from './components/SituacaoAtual';
import Info from './components/Info';
// import LocalidadesTable from './components/LocalidadesTable';

const center = [-5.2482901, -38.1303705];
const zoom = 12;

function App() {

  const { regions } = useTabuleiroData();

  return (
    <div className="App">
      {/* zoomControl false para desabilitar o zoom na posição padão */}
      <Map center={center} zoom={zoom} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
        <ZoomControl position="bottomright" />

        {regions.map((region, index) => (
          <Regiao key={index} data={region} />
        ))}

        <SituacaoAtual />

        {/* <LocalidadesTable /> */}

        <Info />

      </Map >
    </div>
  );

}

export default App;