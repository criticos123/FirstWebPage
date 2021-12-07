import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import styled from "styled-components"
import useTranslations from "../hooks/use-translations";


const backgroundstyles={

  height: '60vh',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage:`linear-gradient(rgba(0.1,0.1,0.1,0.2), rgba(0.1,0.1,0.1,0.2)),url(https://cdn.tourcms.com/a/11676/821/1/default.jpg)`,

};

const textstyles={

    color: "#fff",
    fontWeight: "bold",
    textShadow: "black 2px 2px 2px ",
    marginBottom:"10px",

};

export default function MainFeaturedPost() {

  const { getTranslations } = useTranslations();

  return (
    <Grid>
      <Card style={backgroundstyles} >
        <CardContent sx={{ flex: 2 }}>
          <Typography style={textstyles} component="h2" variant="h4">
            {getTranslations("homepage.header")}
          </Typography>
          <Typography style={textstyles} variant="subtitle1" paragraph>
            {getTranslations("homepage.body")}
          </Typography>
          <Typography style={textstyles} variant="subtitle1" paragraph>
            {getTranslations("homepage.body2")}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
