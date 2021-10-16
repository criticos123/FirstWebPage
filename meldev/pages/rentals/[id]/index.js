import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getRentalItem } from "../../../api/rentals/rentals.queries";
import Youtube from "../../../components/Youtube";
import Seo from "../../../components/Seo";

const useStyles = makeStyles((theme) => ({

  wrapper:{

    margin:'100px',
    display:'flex',
    alignItems:"center",
    justifyContent:'center',
 

  },

  details: {

    display: 'flex',
    padding:'20px',

  },

  imgcontainer:{

    display:"flex",
    flexDirection:'column',
    margin:"20px",
    width:"100%",

  },

  sideimg:{


    display:"flex",
    flexDirection:'row',
    justifyContent:"center",
    alignContent:"center",


  },

  bottomimgs:{

    height:"100px",
    width:"100px",
    marginTop:"20px",
    marginRight:"20px",
    borderRadius:"2px",
    boxShadow: "5px 5px 15px -8px #000000",

  }
  


}));

export default function MediaControlCard() {
  const classes = useStyles();
  const [rentalItem, setRentalItem] = useState([]);

  const { query: { id } }=useRouter();

   useEffect(()=> {
    getRentalItem({id}).then(setRentalItem);
   }, [id]);

   const { imageKitchen,imageBedroom,imageBathroom, imageLivingroom, price, apartmentName, streetAddress,video } = rentalItem

   console.log({rentalItem})

  return (
    <Seo title='Apartment' description='Apartment listing'>
    <div className={classes.wrapper}>
    <Card>
      <div className={classes.details}>
        <div className={classes.imgcontainer}>
          <Youtube embedId={video}/>
        <div clasName={classes.sideimg}>
            <img className={classes.bottomimgs} src={imageBathroom} alt="bathroom"/>
            <img className={classes.bottomimgs} src={imageLivingroom} alt="livingroom"/>
            <img className={classes.bottomimgs} src={imageKitchen} alt="kitchen"/>
            <img className={classes.bottomimgs} src={imageBedroom} alt="bedroom"/>
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
