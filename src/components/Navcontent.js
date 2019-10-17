import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Link as Link2} from 'react-router-dom';

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
    flexShrink: 0,
    color:"black",
    textDecoration: "none"
  }
}));

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
          <Link2 className={classes.toolbarLink} to={`/`}>Inicio</Link2>
          {props.section.map((section, id) => (
            <Link2 key={id} className={classes.toolbarLink} to={`/seccion/${section.IdSection}`}>
              {section.Nombre}
            </Link2>
            
          ))} 
        </Toolbar>
      </Container>
    </div>
  );
}
