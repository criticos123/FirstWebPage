import React from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },

  link: {
    margin: theme.spacing(3, 3,3,3),
    color: " #008ae6",
    textDecoration: "none",
    fontSize: "100px",

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
            <Link href="/">
                <Typography variant="h1">
                    <a className={classes.link}>Meldev</a>
                </Typography>
            </Link>
    </React.Fragment>
  );
}