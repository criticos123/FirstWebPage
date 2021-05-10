import React, { Component } from 'react';
import styled from "styled-components";
import apartmentexample1 from "../photos/apartmentexample1.jpeg";
import apartmentexample2 from "../photos/apartmentexample2.jpeg";
import apartmentexample3 from "../photos/apartmentexample3.jpeg";
import apartmentexample4 from "../photos/apartmentexample4.png";

class Rent extends Component {
  render() {
    return (
    <Container>
      <Headingbox>
       <Header>Apartments for Rent</Header>
      </Headingbox>
      <Apartmentbox>
        <Imagebox>
        <Bigimage src={apartmentexample1}/>
        <Smallimagebox>
        <Smallimage src={apartmentexample2}/>
        <Smallimage src={apartmentexample3}/>
        <Smallimage src={apartmentexample4}/>
        </Smallimagebox>
        </Imagebox>
        <Textbox>
        <h5>123 Downtown Montreal</h5>
        <span>One Bedroom</span>
        <span>One Bathroom</span>
        <span>Availibity: September 4th,2021</span>
        </Textbox>
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
    width:60%;
    background-color: #fff;
  
`;

const Headingbox= styled.div`

    text-align:left;
`;

const Header= styled.h3`

`;

const Apartmentbox= styled.div`

  border: 2px solid #6495ED;
  width:80%;
  display:flex;
  flex-direction:row;

  `;

const Textbox= styled.div`

    display:flex;
    flex-direction:column;
    min-width:40%;
`;  

const Imagebox= styled.div`

    margin-top:20px;

`;

const Bigimage= styled.img`

    width:70%;
    height:70%;
    margin-left:30px;
`;
const Smallimagebox= styled.div`

   display:flex;
   margin-left:30px;
`;


const Smallimage= styled.img`

  width:20%;
  height:20%;
  margin:10px;
    
`;


export default Rent;