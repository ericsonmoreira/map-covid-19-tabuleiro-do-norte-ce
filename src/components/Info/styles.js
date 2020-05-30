import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  z-index: 1000;  
`;

export const Link = styled.a``;

export const Icon = styled.img`
  width: 25px;
  transition: all .2s;

  &:hover {
    width: 50px;
  }
`;