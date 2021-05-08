import React, { Component } from 'react';
import styled from "styled-components";

class Contact extends Component {
  render() {
    return (
    <Container>
        <Heading>Contact Us</Heading>
        <Text>Send us an Email and we will get back to you as soon as possible.</Text>
        <Textarea rows="8" cols="50">
        </Textarea>
        <Button>Send</Button>

    </Container>
    );
  }
}

const Container= styled.div`

    text-align:left;
    display:flex;
    flex-direction:column;
    height:100%;
    align-items:center;
    border: 2px solid #6495ED;
    border-top:none;
    margin-left:20%;
    max-width:50%;
    background-color: #fff;
`;

const Text= styled.p`

`;

const Heading= styled.h3`

    margin-left:10px;
    text-align:left;

`;

const Textarea=styled.textarea`

    margin-left:20px;
    margin-right:20px;
    margin-bottom:30px;

`;

const Button= styled.button`

        margin-bottom:100%;
        display: inline-block;
        padding: 15px 25px;
        font-size: 24px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #6495ED;
        border: none;
        border-radius: 15px;

        &: active {
            background-color: #dcdcdc;
            transform: translateY(4px);
          }
`;
export default Contact;