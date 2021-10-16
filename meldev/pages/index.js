import React from "react";
import Link from "next/link";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "../components/MainFeaturedPost";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import apartmentexample5 from "../assets/apartmentexample5.jpg";

const useStyles = makeStyles((theme) => ({
  bigbody: {
    marginTop: theme.spacing(4),
  },
  root: {
    display: "flex",
    maxWidth: "35%",
    marginLeft: "10%",
    marginBottom: "10%",
    marginTop: "5%",
    flexDirection: "column",
    alignItems: "center",
    padding: "5px",
  },

  buttonStyle: {
    backgroundColor: "#4169E1",
    padding: "10px",
  },

  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const mainFeaturedPost = {
  title: "Welcome to Meldev Holdings,",
  description:
    "Our Company holds on to many properties that are available to Rent. Feel free to contact us with any questions or if you want to book a tour for one our units",
  image: apartmentexample5,
  imgText: "main image description",
};

let cardOne = {
  title: "Browse our Rentals that are currently Available",
  buttonLink: "rentals",
};

let cardTwo = {
  title: "Have questions? Click Here to send use an email",
  buttonLink: "contact",
};
const cards = [cardOne, cardTwo];

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main className={classes.bigbody}>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {cards.map((post) => (
              <Card className={classes.root}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button className={classes.buttonStyle} color="primary">
                    <Link href={`/${post.buttonLink}`}>
                      <a className={classes.link}>{post.buttonLink}</a>
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
