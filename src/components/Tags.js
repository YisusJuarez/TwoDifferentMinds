import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
const useStyles = makeStyles(theme => ({
  
  chip: {
    margin: theme.spacing(0.3),
    backgroundColor: "#1b65a7",
    color:"white"
  }
}));

export default function Chips(props) {
  const classes = useStyles();
  return(<Chip size="small" label="Basic Chip" className={classes.chip} clickable/>)
}
