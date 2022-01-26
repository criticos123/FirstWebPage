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
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Pagination, Navigation } from "swiper";
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
    flexWrap: "Wrap",
  },

  content: {
    padding: "5px",
    width: "100%",
  },

  video: {
    padding: "1px",
  },

  mainImg: {},
}));

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  border:"none",
};

const buttonstyle = {
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  margin:"10px",
  fontWeight:"Bold",
};

const buttonstyle2 = {
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  margin:"10px",
  fontWeight:"Bold",
  backgroundColor:"#DC143C",
};

SwiperCore.use([Pagination, Navigation]);

export default function MediaControlCard() {
  const classes = useStyles();
  const [rentalItem, setRentalItem] = useState([]);

  const { getTranslations } = useTranslations();

  const {
    query: { id },
    locale,
  } = useRouter();

  useEffect(() => {
    if (id) {
      getRentalItem({ id }).then(setRentalItem);
    }
  }, [id, locale]);

  const {
    imageFront,
    images,
    price,
    apartmentName,
    streetAddress,
    video,
    availability,
  } = rentalItem;

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <Seo translationKey="rental">
      <div className={classes.wrapper}>
        <Card>
          <CardContent className={classes.content}>
            <List sx={{ maxWidth: 360, bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <React.Fragment>
                  <CardMedia
                    className={classes.mainImg}
                    component="img"
                    alt="Apartment Front"
                    image={imageFront}
                  />
                </React.Fragment>
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem>
                <React.Fragment>
                  <Button
                    style={buttonstyle}
                    onClick={handleOpen}
                    variant="contained"
                  >
                    PHOTOS
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                        className="mySwiper"
                      >
                        {images &&
                          images.map(({ url, description }, index) => (
                            <SwiperSlide key={`rental-image=${index}`}>
                              <CardMedia
                                className={classes.imgs}
                                component="img"
                                alt={description}
                                image={url}
                              />
                            </SwiperSlide>
                          ))}
                      </Swiper>
                    </Box>
                  </Modal>
                  
                     <Button
                   style={buttonstyle2}
                  onClick={handleOpen2}
                    variant="contained"
                   color="secondary"
                   >
                    VIDEO
                   </Button>
                  <Modal
                    open={open2}
                     onClose={handleClose2}
                     aria-labelledby="modal-modal-title"
                     aria-describedby="modal-modal-description"
                   >
                     <Box sx={style}>
                      <Youtube embedId={video}/>
                     </Box>
                   </Modal>
                  
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
                        <Text>{apartmentName} </Text>
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
                        <Text> {streetAddress}</Text>
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
                        <Text>${price}</Text>
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
                        <Text>{availability}</Text>
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
  font-size: 20px;
`;

const Text = styled.span`
  font-size: 20px;
`;
