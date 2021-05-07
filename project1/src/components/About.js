import React, { Component } from 'react';
import styled from "styled-components";

class About extends Component {
  render() {
    return (
      <Container>
       <Heading>About Us</Heading>
       <Text>An apartment (American English), or flat (British English, Indian English), is a self-contained housing unit (a type of residential real estate) that occupies only part of a building, generally on a single story. There are many names for these overall buildings, see below. The housing tenure of apartments also varies considerably, from large-scale public housing, to owner occupancy within what is legally a condominium (strata title or commonhold), to tenants renting from a private landlord (see leasehold estate).</Text>
      </Container>
    );
  }
}

const Container= styled.div`

    text-align:left;
    display:flex;
    flex-direction:column;
    height:100%;
    border: 2px solid #2F4F4F;
    margin-left:20%;
    max-width:50%;
    background-color: #fff;
`;

const Text= styled.p`

    margin:10px;
    margin-bottom:100%;
`;

const Heading= styled.h3`

    margin-left:10px;

`;

export default About;