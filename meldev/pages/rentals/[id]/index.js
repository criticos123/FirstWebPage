import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@material-ui/core/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

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
    flexWrap: "Wrap",
  },

  content: {
    padding: "10px",
    width: "100%",
    paddingRight: "20px",
  },

  video: {
    padding: "1px",
  },

  imgs: {
    height: "55px",
    padding: "5px",
    width: "55px",
    "&:hover": {
      opacity: "0.5",
      cursor: "pointer",
    },

    "@media (max-width: 380px)": {
      width: "30%",
    },
  },

  mainImg: {
    width: "345px",
    height: "305px",
    marginRight: "10px",

    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const [rentalItem, setRentalItem] = useState([]);

  const { getTranslations } = useTranslations();

  const [open, setOpen] = useState(false);

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
    images,
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
            <List sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <React.Fragment>
                  {imageFront && (
                    <CardMedia
                      className={classes.mainImg}
                      component="img"
                      alt="Apartment Front"
                      image={imageFront.asset.url}
                    />
                  )}
                </React.Fragment>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <React.Fragment>
                  {images &&
                    images.map(
                      ({ image, description }, index) =>
                        image && (
                          <CardMedia
                            key={`rental-image=${index}`}
                            className={classes.imgs}
                            component="img"
                            alt={description}
                            image={image.asset.url}
                          />
                        )
                    )}
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
                        <Bold>
                          {getTranslations("rentalDetailsPage.bedroomNumber")}
                        </Bold>{" "}
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
                        <Bold>
                          {getTranslations("rentalDetailsPage.location")}
                        </Bold>
                        {streetAddress}
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
                        <Bold>
                          {getTranslations("rentalDetailsPage.price")}
                        </Bold>{" "}
                        ${price}
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
                        sx={{ display: "inline", fontWeight: "bold" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <Bold>
                          {getTranslations("rentalDetailsPage.availability")}
                        </Bold>{" "}
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

const Bold = styled.span`
  font-weight: bold;
`;
