import React from 'react';
import './style.css';
import icon from '../../../public/githubicon.svg'

function Info() {

  const url = "https://github.com/ericsonmoreira/map-covid-19-tabuleiro-do-norte-ce"

  return (
    <div className="Info">
      <a href={url}>
        <img src={icon} alt="logo" />
      </a>
    </div>
  )

}

export default Info;