import React from "react";
/*Import de estilos*/
import "../css/BlogPost.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
/* CARD DEL AUTOR */
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Imagen from "../card-example.jpg";

class BlogPost extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className="espacio-header">
        <Grid container spacing={1}>
          <Grid item xl={12} lg={12} sm={12} xs={12}>
            <Typography align="left" variant="h4">
              FaceApp, ¿Un Peligro Para Nuestros Datos?
            </Typography>
            <Typography
              align="left"
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
            >
              subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Quos blanditiis tenetur subtitle1. Lorem ipsum dolor sit
              amet,
            </Typography>
          </Grid>
          <Card>
            <CardHeader
              avatar={<Avatar>H</Avatar>}
              title="Nombre del autor"
              subheader="Agosto 5 · hace 5 min"
            />
          </Card>
        </Grid>
        <Card className="img-card">
          <CardMedia className="img-art" image={Imagen} title="titulo" />
        </Card>
      </Container>
    );
  }
}
export default BlogPost;
