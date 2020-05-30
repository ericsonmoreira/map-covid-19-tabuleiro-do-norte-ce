import styled from 'styled-components';

export const casesColors = {
  confirmados: 'red',
  suspeitos: 'orange',
  descartados: 'blue',
  letais: 'black',
}

export const Container = styled.div`
  padding: 1em;
  position: absolute;
  bottom: 1em;
  left: 1em;
  z-index: 1000;
  border: 2px #000000;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 1.2em;
  background-color:#FFF;
`;

export const Title = styled.span`
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

export const DataRef = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
`;

export const DataRefLabel = styled.div`
  color: black;
`;

export const DataRefValue = styled.div`
  color: black;
`;