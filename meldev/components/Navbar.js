import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import useTranslations from "../hooks/use-translations";

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
    padding: theme.spacing(2, 2),
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

    "&:hover": {
      color: "lightgrey",
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const { getTranslations } = useTranslations();

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
            {getTranslations("navbar.navlinks").map(({ href, text }, index) => (
              <Link key={`navlink-${text}-${index}`} href={href}>
                <a className={classes.link}>{text}</a>
              </Link>
            ))}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
