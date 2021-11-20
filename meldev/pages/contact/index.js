import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import emailjs from "emailjs-com";

import Seo from "../../components/Seo";

import useTranslations from "../hooks/use-translations";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "wrap",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  title: {
    fontSize: "30px",
  },
}));

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_mn0w9sq",
      "template_vvl3zra",
      e.target,
      "user_TWAfyd56g18yKYV7rfwRH"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default function Contact() {
  const classes = useStyles();

  const { getTranslations } = useTranslations();

  return (
    <Seo translationKey="contact">
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <h2 className={classes.title}>
            {getTranslations("contactPafe.header")}
          </h2>
          <form className={classes.form} onSubmit={sendEmail}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="from_name"
                  variant="outlined"
                  required
                  Send
                  fullWidth
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="from_email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="message"
                  multiline="true"
                  rows="5"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="primary"
              className={classes.submit}
            >
              {getTranslations("contactPage.send")}
            </Button>
          </form>
        </div>
      </Container>
    </Seo>
  );
}
