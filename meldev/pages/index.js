import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import MainFeaturedPost from "../components/MainFeaturedPost";

import Cards from "../components/Cards";

import Seo from "../components/Seo";

import apartmentexample5 from "../assets/apartmentexample5.jpg";

const useStyles = makeStyles((theme) => ({
  bigbody: {
    marginTop: theme.spacing(2),
  },

  grid:{

    display:"row",


    '@media (max-width: 600px)' : {

      backgroundColor:"red",
      flexDirection:"column",
  },

  },
  root: {
    // display: "flex",
    // maxWidth: "35%",
    marginLeft: "10%",
    // marginBottom: "10%",
    marginTop: "5%",
    // flexDirection: "column",
    alignItems: "center",
    // padding: "5px",

    '@media (min-width: 600px)' : {

      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:'red',


  },

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


export default function Home() {
  const classes = useStyles();

  return (
    <Seo title="Home" description="Meldev Apartments at great prices!">
      <Container maxWidth="lg">
        <main className={classes.bigbody}>
          <MainFeaturedPost post={mainFeaturedPost} />
        <Cards/>
        </main>
      </Container>
    </Seo>
  );
}
