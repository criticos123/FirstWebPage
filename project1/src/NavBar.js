import React, { Component } from 'react';
import styled from "styled-components";


class NavBar extends Component {
  render() {
    return (
      <Container>
          <Logo>Meldev</Logo>
      </Container>
    );
  }
}

const Container= styled.div`

    height:25%;
`;

const Logo= styled.h1`

    Font-size:50px;
    color:#008B8B
  
`;

export default NavBar;
