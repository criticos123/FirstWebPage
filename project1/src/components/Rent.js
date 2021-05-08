import React, { Component } from 'react';
import styled from "styled-components";

class Rent extends Component {
  render() {
    return (
    <Container>
      <Headingbox>
       <Header>Apartments for Rent</Header>
         <button>Number of Apartments</button>
      </Headingbox>
      <Apartmentbox>
        <h3>One bedroom</h3>
      </Apartmentbox>
    </Container>
    );
  }
}

const Container= styled.div`

    height:100vh;
    border: 2px solid #6495ED;
    margin-left:20%;
    padding-left:20px;
    max-width:60%;
    background-color: #fff;
  
`;

const Headingbox= styled.div`

    text-align:left;
`;

const Header= styled.h3`

`;

const Apartmentbox= styled.div`

  display:flex;
  border: 2px solid #6495ED;
  margin-top:20px;
  width:50%;
  margin-left:20%;

`;

export default Rent;