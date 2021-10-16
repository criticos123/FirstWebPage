import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import apartmentexample2 from '../assets/apartmentexample2.jpeg';

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
  


}));

let content = [{aptNumber: 'One Bedroom', coverImg: apartmentexample2,strtAddress:'Pine',price:'$3000/month'}];

export default function MediaControlCard() {
  const classes = useStyles();


  return (
    <div className={classes.wrapper}>
    <Card>
      <div className={classes.details}>
      <div className={classes.imgcontainer}>
        {content.map((posts)=>(
          <div>
          <img src={posts.coverImg} alt="mainImg"/>
            </div>
          
        ))}
      </div>
      <CardContent className={classes.txtbox}>
        {content.map((posts)=>(
          <Typography variant="p">
            {posts.aptNumber}
            {posts.strtAddress}
            {posts.price}
          </Typography>
        ))}
      </CardContent>
      </div>
    </Card>
    </div>
  );
}
