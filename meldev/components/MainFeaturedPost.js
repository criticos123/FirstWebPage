import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import useTranslations from "../hooks/use-translations";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundImage:
      "url(https://images.dailyhive.com/20210512064924/montreal-apartments.jpg)",
    height: "35vh",
    backgroundPosition: "center",
    backgroundPepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: "0.9",
    background: "rgba(33, 33, 33, .9)",
  },

  title: {
    color: "#fff",
    fontWeight: "bold",
    textShadow: "black 10px 10px 10px ",
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    textShadow: "black 10px 10px 10px ",
  },
}));

export default function MainFeaturedPost() {
  const classes = useStyles();

  const { getTranslations } = useTranslations();

  return (
    <Grid>
      <Card sx={{ display: "flex" }} className={classes.main}>
        <CardContent sx={{ flex: 1 }}>
          <Typography className={classes.title} component="h2" variant="h4">
            {getTranslations("homepage.header")}
          </Typography>
          <Typography className={classes.text} variant="subtitle1" paragraph>
            {getTranslations("homepage.body")}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
