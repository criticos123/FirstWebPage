import React, { Component } from 'react';
import styled from "styled-components";
import Home from './components/Home';
import About from './components/About';
import Rent from './components/Rent';
import Contact from './components/Contact';
import { BrowserRouter as Router,Route,NavLink} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar>
          <Homelink to="/">
          <Logo>Meldev</Logo>
          </Homelink>
            <Rightbar>
            <Aboutlink to="/About">About</Aboutlink>
            <Rentlink to="/Rent" >For Rent</Rentlink>
            <Contactlink to="/Contact">Contact Us</Contactlink>
            </Rightbar>
        </Navbar>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Rent">
            <Rent/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
        </Router>
      </Wrapper>
    );
  }
}

export default App;


const Wrapper= styled.body`

  background:
  linear-gradient(lightblue, transparent),
  linear-gradient(to top , #6495ED, transparent);
  background-blend-mode: screen;
  margin:auto;

`;

const Navbar= styled.div`

    display:flex;
    justify-content:end;
    width:100%;
    border-bottom:4px solid #6495ED; 
    background-color: #fff;
    
`;

const Homelink=styled(NavLink)`

    text-decoration:none;
    color:#6495ED;
`;

const Logo= styled.h1`

    Font-size:50px;
    margin-left:10px;
    text-decoration:noe;
  
`;

const Rightbar= styled.div`

    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:60%;

    
`;

 const Aboutlink=styled(NavLink)`
    

    Font-size:30px;
    margin-right:20px;
    color:#6495ED;
 `;

 const Rentlink=styled(NavLink)`
    
    Font-size:30px;
    margin-right:20px;
    color:#6495ED;
`;

const Contactlink=styled(NavLink)`
    
    Font-size:30px;
    color:#6495ED;
`;
