import React from 'react';
import { Map, TileLayer, 
  // Marker, Popup, Rectangle, Circle, Tooltip 
} from 'react-leaflet'
import Subtitles from './components/Subtitles'

import * as data from '../tabueiro_data.json'
import Regiao from './components/Regiao';

const center = [-5.2482901, -38.1303705]
const zoom = 12

function App() {

  return (
    <Map center={center} zoom={zoom} >
      <TileLayer attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.regions.map(region => (
        <Regiao data={region} />
      ))}

      <Subtitles />
    </Map >

  );

}

export default App;
