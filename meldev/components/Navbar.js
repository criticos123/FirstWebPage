import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  appBar: {
    borderTop: `2px solid #008ae6`,
    borderBottom: `2px solid #008ae6`,
    height: "100px;",
    padding: theme.spacing(2,2),
  },

  toolbar: {
    flexWrap: "wrap",
  },

  toolbarTitle: {
    flexGrow: 1,
    fontSize: "60px",
    color: " #008ae6",
    textDecoration: "none",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
  },
  
  link: {
    margin: theme.spacing(1, 1.5),
    color: " #008ae6",
    textDecoration: "none",
    fontSize: "23px",

    '&:hover': {
      color: "lightgrey",
      textDecoration:"underline",
      cursor: "pointer",
   },
  },

}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <nav>
            <Link href="/rentals">
              <a className={classes.link}>Rentals</a>
            </Link>
            <Link href="/contact">
              <a className={classes.link}>Contact Us</a>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}



