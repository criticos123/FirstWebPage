import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter as Router,Route} from "react-router-dom";

import Home from './components/Home';
import About from './components/Rentals';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Item from './components/Item';



class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <Navbar/>
          <Route path="/Home">
            <Home/>
          </Route>
          <Route path="/Rentals">
            <About/>
          </Route>
          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/Item">
            <Item/>
          </Route>
        </Router>
      </Wrapper>
    );
  }
}

export default App;


const Wrapper= styled.body`

  linear-gradient(lightblue, transparent),
  linear-gradient(to top , #6495ED, transparent);
  background-blend-mode: screen;
  margin:auto;
  flex-wrap: wrap;

`;

