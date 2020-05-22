import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px;
  position: absolute;
  z-index: 1000;
  background-color: blueviolet;
  top: -100vh;
  left: 1em;
  transition: all 0.5s;

  :hover{
    top: 0;
  }

  & .teste{
    background-color: orange;
    position:absolute;
    right: 0;
    bottom: -1rem;
  }

`;