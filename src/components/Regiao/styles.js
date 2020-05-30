import styled from 'styled-components';

export const casesColors = {
  confirmados: 'red',
  suspeitos: 'orange',
  descartados: 'blue',
  letais: 'black',
}

export const TooltipContent = styled.div`
  display: block;
  flex-direction: column;
`;

export const Title = styled.span`
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;

export const CovidCases = styled.ul`
  display: inline;
  list-style: none;
`;

export const CovidCase = styled.li`
  background-color: ${props => props.color};
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const CaseLabel = styled.div`
  color: #FFF;
`;
export const CaseQuant = styled.div`
  color: #FFF;
  margin-left: 5px;
`;