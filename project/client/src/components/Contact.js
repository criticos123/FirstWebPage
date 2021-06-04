import React from 'react';
import Button from '../../public/node_modules/@material-ui/core/Button';
import CssBaseline from '../../public/node_modules/@material-ui/core/CssBaseline';
import TextField from '../../public/node_modules/@material-ui/core/TextField';
import Grid from '../../public/node_modules/@material-ui/core/Grid';
import { makeStyles } from '../../public/node_modules/@material-ui/core/styles';
import Container from '../../public/node_modules/@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap:'wrap',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin:theme.spacing(3,0,2),
  },

  title: {
    fontSize:"30px",
  }
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <h2 className={classes.title}>
          Contact Us
        </h2>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="question"
                id="question"
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
            Send
          </Button>
        </form>
      </div>
    </Container>
  );
}