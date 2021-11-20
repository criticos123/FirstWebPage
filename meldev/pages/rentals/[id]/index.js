import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@material-ui/core/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import styled from "styled-components";


import { getRentalItem } from "../../../api/rentals/rentals.queries";
import Youtube from "../../../components/Youtube";
import Seo from "../../../components/Seo";
import useTranslations from "../../../hooks/use-translations";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
    marginBottom: "100px",
  },

  content:{

    padding:"10px",
    width:"200%",
    paddingRight:"20px",
  },

  video: {
    padding: "1px",
  },

  imgs:{
    width:"85px",
    height:"55px",
    padding:"5px",

  },

  mainImg:{

    width:"345px",
    height:"305px",
  }

}));

export default function MediaControlCard() {
  const classes = useStyles();
  const [rentalItem, setRentalItem] = useState([]);

  const { getTranslations } = useTranslations();

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      getRentalItem({ id }).then(setRentalItem);
    }
  }, [id]);

  const {
    imageFront,
    imageKitchen,
    imageBedroom,
    imageBathroom,
    imageLivingroom,
    price,
    apartmentName,
    streetAddress,
    video,
    availability,
  } = rentalItem;

  return (
    <Seo translationKey="rental">
      <div className={classes.wrapper}>
        <Card>
        <CardContent className={classes.content}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <React.Fragment>
          <CardMedia className={classes.mainImg}
                component="img"
                alt="front"
                image={imageFront}
          />
          </React.Fragment>
          </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <React.Fragment>
              <CardMedia className={classes.imgs}
                component="img"
                alt="kitchen"
                image={imageKitchen}
              />
              <CardMedia className={classes.imgs}
              component="img"
              alt="bedroom"
              image={imageBedroom}
              />
              <CardMedia className={classes.imgs}
              component="img"
              alt="bathroom"
              image={imageBathroom}
              />
              <CardMedia className={classes.imgs}
              component="img"
              alt="livingroom"
              image={imageLivingroom}
              />
              </React.Fragment>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText
              primary={
                <React.Fragment>
                  <Youtube embedId={video} />
                </React.Fragment>
                }
              locale/>
            </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
          <ListItemText
            primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               <Bold> Location:</Bold>{streetAddress}
              </Typography>
            </React.Fragment>
              }
            />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemText
              primary={
                <React.Fragment>
                  <CardMedia
                    className={classes.imgs}
                    component="img"
                    alt="kitchen"
                    image={imageKitchen}
                  />
                  <CardMedia
                    className={classes.imgs}
                    component="img"
                    alt="bedroom"
                    image={imageBedroom}
                  />
                  <CardMedia
                    className={classes.imgs}
                    component="img"
                    alt="bathroom"
                    image={imageBathroom}
                  />
                  <CardMedia
                    className={classes.imgs}
                    component="img"
                    alt="livingroom"
                    image={imageLivingroom}
                  />
                </React.Fragment>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <strong>
                          {getTranslations("rentalDetailsPage.bedroomNumber")}
                        </strong>{" "}
                        {apartmentName}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {getTranslations("rentalDetailsPage.location", {
                          streetAddress,
                        })}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <strong>
                          {getTranslations("rentalDetailsPage.price")}
                        </strong>{" "}
                        {price}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline", fontWeight: "strong" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <strong>
                          {getTranslations("rentalDetailsPage.availability")}
                        </strong>{" "}
                        {availability}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </div>
    </Seo>
  );
}
