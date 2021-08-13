import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import apartmentexample2 from '../assets/apartmentexample2.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
   
    maxWidth:"60%",
    margin:"20%",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',


  },
  content: {
    flex: '1 0 auto',
  },
}));

let content = [{aptNumber: 'One Bedroom', coverImg: apartmentexample2,strtAddress:'Pine',price:'$3000/month'}];

export default function MediaControlCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
            {content.map((posts)=>(
                <Typography variant="h2">
                    {posts.aptNumber}
                </Typography>
            ))}
        </CardContent>
      </div>
    </Card>
  );
}
