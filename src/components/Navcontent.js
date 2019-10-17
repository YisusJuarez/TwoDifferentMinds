import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1,
    width:"100% !important"
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    color: "black",
  
  },
  bg: {
    backgroundColor: "white"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  }
}));

// const sections = [
//   "iOS",
//   "Android",
//   "MacOS",
//   "Windows",
//   "Diario",
//   "Opinión",
//   "Ciencia",
//   "IA"
// ];

export default function Navcontent(props) {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container maxWidth="lg">
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {/* {props.section.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))} */}
        </Toolbar>
      </Container>
    </div>
  );
}
