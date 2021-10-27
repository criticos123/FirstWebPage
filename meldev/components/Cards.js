
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "next/link";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: "flex",
    flexWrap:"wrap",
    backgroundColor:"red",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  bold: {
    fontWeight: "bold",
  },
}));

let cardOne = {
  title: "Browse our Rentals that are currently Available",
  buttonLink: "rentals",
};

let cardTwo = {
  title: "Have questions? Click Here to send use an email",
  buttonLink: "contact",
};

const cards = [cardOne, cardTwo];
export default function Cards() {


  const classes = useStyles();

  return (
      <main>
        {cards.map((post, index) => (
        <Container className={classes.cardGrid} maxWidth="lg">
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {post.title}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/${post.buttonLink}`}>
                        <a>
                          <Button size="small" color="primary">
                            {post.buttonLink}
                        </Button>
                        </a>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>       
        </Container>
        ))}
      </main>
  );
}
