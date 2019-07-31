import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//Import de imagen de ejemplo
import Imagen from "../card-example.jpg";

const useStyles = makeStyles({
  card: {
    width: "100%"
  },
  media: {
    height: 180
  }
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={Imagen}
          title="titulo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Titulo
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Intro del artículo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartir
        </Button>
        <Button size="small" color="primary">
          Leer más
        </Button>
      </CardActions>
    </Card>
  );
}
