import * as React from "react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  height: 60px;
  width: 100%;
  max-width: 100vw;
  background-color: ${(props) => `${props.theme.header.backgroundColor}`};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const Container = styled.div`
  max-width: ${(props) => `${props.theme.globals.maxWidth}`};
  color: ${(props) => `${props.theme.header.textColor}`};
  height: inherit;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: start;

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <Container>Shapes</Container>
    </HeaderStyle>
  );
}

export default Header;
