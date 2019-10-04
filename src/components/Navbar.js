import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
// import Logo from "../logo.png";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  backGround: {
    backgroundColor: "#4fa0cb"
  },
  logoicon: {
    width: 150,
    height: "auto",
    paddingTop: 7
  },
  menuButtonHamburguer:{
    color: "white",
    borderColor: "white"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.backGround}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon className={classes.menuButtonHamburguer} />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            <img className={classes.logoicon} src={Logo} alt="img" />
          </Typography> */}
           {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton> */}
        </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
