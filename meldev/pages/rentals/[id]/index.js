import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@material-ui/core/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import { getRentalItem } from "../../../api/rentals/rentals.queries";
import Youtube from "../../../components/Youtube";
import Seo from "../../../components/Seo";

const useStyles = makeStyles((theme) => ({
  
  wrapper:{

    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"100px",
    marginBottom:"100px",

  },

  content:{

    padding:"10px",
  },

  video:{

    padding:"1px",
    
  },

  imgs:{

    marginLeft:"7px",
    width:"85px",
    height:"55px",
    padding:"5px",

  },

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
      <div className={classes.wrapper}>
        <Card>
        <CardContent className={classes.content}>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <React.Fragment>
              <Youtube embedId={video}/>
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
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Number of Bedrooms:{apartmentName}
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
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               Location:{streetAddress}
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
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Price:{price}
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
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Availability:{availability}
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
