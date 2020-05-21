import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 1000;
  background-color: blueviolet;
  top: -5em;
  left: 1em;
  transition: 0.5s;

  :hover{
    top: 1em;
    transition: 0.5s;
  }
`;