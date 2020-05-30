import React from 'react';

import {
  Container,
  Link,
  Icon
} from './styles'

import icon from '../../../public/githubicon.svg'

function Info() {

  const url = "https://github.com/ericsonmoreira/map-covid-19-tabuleiro-do-norte-ce"

  return (
    <Container>
      <Link href={url}>
        <Icon src={icon} alt="logo" />
      </Link>
    </Container>
  )

}

export default Info;