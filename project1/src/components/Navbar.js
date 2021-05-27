import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `2px solid #008ae6`,
    height:"100px;",
    padding:theme.spacing(2,4),
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontSize:"60px",
    color: " #008ae6",
    textDecoration:"none",
    fontFamily: "Arial, sans-serif",
    fontWeight:"bold",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: " #008ae6",
    textDecoration:"none",
    fontSize:"23px",
    },

}));


export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <Link to="/Home" className={classes.toolbarTitle}>
            <Typography variant="h1" noWrap className={classes.toolbarTitle}>
             Meldev
            </Typography>
        </Link>
         <nav>
            <Link to="/Rentals" className={classes.link}>
              Rentals
            </Link>
            <Link to="/Contact" className={classes.link}>
              Contact Us
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}