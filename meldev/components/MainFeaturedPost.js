import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const useStyles = makeStyles((theme) => ({

  main:{
    backgroundImage:"url(https://images.dailyhive.com/20210512064924/montreal-apartments.jpg)",
    height: "35vh",
    backgroundPosition: "center",
    backgroundPepeat: "no-repeat",
    backgroundSize: "cover",
    opacity:"0.9",
    background: "rgba(33, 33, 33, .9)",


  },
  
  title:{

    color:"#fff",
    fontWeight:"bold",
    textShadow: "black 10px 10px 10px ",
  },

  text:{

    color:"#fff",
    fontWeight:"bold",
    textShadow: "black 10px 10px 10px ",
  },

}));

export default function MainFeaturedPost() {
  const classes = useStyles();

  return (
    <Grid >
        <Card sx={{ display: 'flex' }} className={classes.main}>
          <CardContent sx={{ flex: 1 }}>
            <Typography className={classes.title} component="h2" variant="h4">
              Welcome to Meldev Holdings,
            </Typography>
            <Typography className={classes.text} variant="subtitle1" paragraph>
             We provide quality rental service to everyone. Please feel free to browse and look at our properties available.
             All our properties are located near downtown region near mcgill university.
            </Typography>
          </CardContent>
        </Card>
    </Grid>
  );
}


