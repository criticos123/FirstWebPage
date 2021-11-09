
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({

    main:{
      marginTop:"60px",
    },

    buttons:{

      textDecoration:"underline",
      color:"#008ae6",
    },

 }));

let cardOne = {
  title: "Browse our Rentals that are currently Available",
  buttonLink: "rentals",
};

let cardTwo = {
  title: "Have questions? Click Here to send use an email",
  buttonLink: "contact",
}

const cards = [cardOne, cardTwo];

export default function Cards() {


  const classes = useStyles();
/* eslint-disable */
  return (
      <div>
      {cards.map((card)=>(
      <Card key={card.id} className={classes.main} sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
        {card.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={card.buttonLink} className={classes.buttons} size="small">{card.buttonLink}</Button>
      </CardActions>
    </Card>
      ))}
      </div>
  );
}

/* eslint-enable */
