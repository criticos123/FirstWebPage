import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Seo from "../../../components/Seo";
import { getRentalItem } from "../../../api/rentals/rentals.queries";

import apartmentexample2 from "../../../assets/apartmentexample2.jpeg";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  details: {
    display: "flex",
    padding: "20px",
  },

  overlay: {
    display: "flex",
    flexDirection: "column",
  },

  sideimg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },

  frontdoor: {
    height: "300px",
    width: "300px",
  },

  bottomimgs: {
    height: "100px",
    width: "100px",
  },
}));

let content = [
  {
    aptNumber: "One Bedroom",
    coverImg: apartmentexample2,
    strtAddress: "Pine",
    price: "$3000/month",
  },
];

export default function MediaControlCard() {
  const classes = useStyles();
  const [rentalItem, setRentalItem] = useState([]);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    getRentalItem({ id }).then(setRentalItem);
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
  } = rentalItem;

  console.log({ rentalItem });

  return (
    <Seo title="Apartment" description="Apartment listing">
      <div className={classes.wrapper}>
        <Card>
          <div className={classes.details}>
            <div className={classes.imgcontainer}>
              <div className={classes.overlay}>
                <img
                  className={classes.frontdoor}
                  src={imageFront}
                  alt="FrontDoor"
                />
                <div clasName={classes.sideimg}>
                  <img
                    className={classes.bottomimgs}
                    src={imageBathroom}
                    alt="bathroom"
                  />
                  <img
                    className={classes.bottomimgs}
                    src={imageLivingroom}
                    alt="livingroom"
                  />
                  <img
                    className={classes.bottomimgs}
                    src={imageKitchen}
                    alt="kitchen"
                  />
                  <img
                    className={classes.bottomimgs}
                    src={imageBedroom}
                    alt="bedroom"
                  />
                </div>
              </div>
            </div>
            <CardContent className={classes.txtbox}>
              <Typography variant="p">
                {apartmentName}
                {streetAddress}
                {price}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    </Seo>
  );
}
