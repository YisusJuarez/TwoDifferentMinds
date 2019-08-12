import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom'
//Import de imagen de ejemplo
import Imagen from "../card-example.jpg";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    height: 180
  },
  cardContent: {
    flexGrow: 1
  }
}));


export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.cardMedia} image={Imagen} title="titulo" />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.titulo}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Intro del artículo 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained"   size="small" >
          Compartir
        </Button>
        <Link to={`/articulo/${props.idUrl}`}>
        <Button variant="contained" size="small" >
          Leer más
        </Button>
        </Link>
       
      </CardActions>
    </Card>
  );
}
