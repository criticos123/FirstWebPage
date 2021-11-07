import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { getRentalItem } from "../../../api/rentals/rentals.queries";
import Youtube from "../../../components/Youtube";
import Seo from "../../../components/Seo";

const useStyles = makeStyles((theme) => ({
  
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const [rentalItem, setRentalItem] = useState([]);

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    if (id) {
      getRentalItem({ id }).then(setRentalItem);
    }
  }, [id]);

  const {
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
    <Seo title="Apartment" description="Apartment listing">
         <Youtube embedId={video} />
         
    
    </Seo>
  );
}
