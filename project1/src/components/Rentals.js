import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import apartmentexample1 from '../assets/apartmentexample1.jpeg';
import apartmentexample2 from '../assets/apartmentexample2.jpeg';
import apartmentexample3 from '../assets/apartmentexample3.jpeg';



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
  bold: {
    fontWeight:'bold',
  },
}));

let one = {aptNumber: 'One Bedroom', coverImg: apartmentexample1,strtAddress:'Pine',price:'$3000/month'};
let two = {aptNumber: 'Two Bedroom', coverImg: apartmentexample2,strtAddress:'De Roche',price:'$3000/month'};
let three = {aptNumber: 'Three Bedroom', coverImg:apartmentexample3,strtAddress:'Aylmer',price:'$3000/month'};


const cards = [one,two,three];

export default function Rentals() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.coverImg}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.username}
                    </Typography>
                    <Typography >
                    <span className={classes.bold}>Location:</span> {card.strtAddress}
                    </Typography>
                    <Typography >
                    <span className={classes.bold}>Price:</span> {card.price}
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
      </main>
    </React.Fragment>
  );
}