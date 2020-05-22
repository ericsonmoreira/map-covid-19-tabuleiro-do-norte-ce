import React from 'react';

import { Container } from './styles';
import { useTabuleiroData } from '../../context/TabuleiroData';

function LocalidadesTable() {

  const { regions } = useTabuleiroData()

  return (
    <Container>
      <table>
        <tr>
          <th>Localidade</th>
          <th>Confirmados</th>
          <th>Suspentos</th>
          <th>Descartados</th>
          <th>Letais</th>
        </tr>
        {regions.map((region, index) => (
          <tr key={index}>
            <td>{region.nome}</td>
            <td>{region.casos.confirmados}</td>
            <td>{region.casos.suspeitos}</td>
            <td>{region.casos.descartados}</td>
            <td>{region.casos.letais}</td>
          </tr>
        ))}
      </table>
      <a className="teste">Teste</a>
    </Container>
  )
}

export default LocalidadesTable;