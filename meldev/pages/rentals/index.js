import React, { useEffect, useState } from "react";
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

import Seo from "../../components/Seo";
import { getRentals } from "../../api/rentals/rentals.queries";
import useTranslations from "../../hooks/use-translations";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
  highlight: {
    backgroundColor: "lime",
  },
}));

export default function Rentals() {
  const classes = useStyles();
  const [rentals, setRentals] = useState([]);

  const { getTranslations } = useTranslations();

  useEffect(() => {
    getRentals().then(setRentals);
  }, []);

  return (
    <Seo translationKey="allRentals">
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {rentals.map(
              (
                {
                  price,
                  apartmentName,
                  imageFront,
                  streetAddress,
                  _id: id,
                  availability,
                },
                index
              ) => (
                <Grid item key={`rental-${index}`} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={imageFront && imageFront.asset.url}
                      alt="Apartment Front"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {apartmentName}
                      </Typography>
                      <Typography>
                        <span className={classes.bold}>Location:</span>{" "}
                        {streetAddress}
                      </Typography>
                      <Typography>
                        <span className={classes.bold}>{getTranslations("rentalDetailsPage.price")}</span> ${price}
                      </Typography>
                      <Typography>
                        <span className={classes.bold}>{getTranslations("rentalDetailsPage.availability")}</span>{" "}
                        {availability}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`/rentals/${id}`}>
                        <a>
                          <Button size="small" color="primary">
                            {getTranslations("allRentalsPage.view")}
                          </Button>
                        </a>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </main>
    </Seo>
  );
}
