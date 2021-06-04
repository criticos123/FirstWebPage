import React from 'react';
import styled from "styled-components";

import Button from '../../public/node_modules/@material-ui/core/Button';
import Card from '../../public/node_modules/@material-ui/core/Card';
import CardActions from '../../public/node_modules/@material-ui/core/CardActions';
import CardContent from '../../public/node_modules/@material-ui/core/CardContent';
import CardMedia from '../../public/node_modules/@material-ui/core/CardMedia';
import CssBaseline from '../../public/node_modules/@material-ui/core/CssBaseline';
import Grid from '../../public/node_modules/@material-ui/core/Grid';
import Typography from '../../public/node_modules/@material-ui/core/Typography';
import { makeStyles } from '../../public/node_modules/@material-ui/core/styles';
import Container from '../../public/node_modules/@material-ui/core/Container';

import Sidebar from './Sidebar';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Rentals() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Main>
      <Sidecontainer>
      <Sidebar/>
      </Sidecontainer>
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Browse our list of available Apartments
        </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Main>
    </React.Fragment>
  );
}

const Main= styled.main`

  display:flex;
  flex-direction:row;

`;

const Sidecontainer= styled.main`

  display:flex;
  flex-direction:row;
  border: 0.2px solid #008ae6;
  border-top:none;
  width:10vw;
  justify-content:center;
  background-color:#FFF;

`;