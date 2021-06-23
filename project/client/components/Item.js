import React from 'react';
import styled from "styled-components";

import CssBaseline from '../../public/node_modules/@material-ui/core/CssBaseline';
import { makeStyles } from '../../public/node_modules/@material-ui/core/styles';
import Container from '../../public/node_modules/@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  bigbody: {
    marginTop: theme.spacing(20),
  },
}));

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <main className={classes.bigbody}>
        <Wrapper>
       <h1> One Bedroom</h1>
        </Wrapper>
        </main>
      </Container>
    </React.Fragment>
  );
}

const Wrapper=styled.div`

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;