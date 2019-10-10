import React from "react";
import "../css/BlogPost.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Imagen from "../card-example.jpg";
import Divider from "@material-ui/core/Divider";
import MiniCards from "../components/MiniCards";
import Tags from "../components/Tags";
import Header from "../components/Header";
import Navcontent from "../components/Navcontent";
/*Icons FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
/*Responsiveness */
import Hidden from "@material-ui/core/Hidden";
/*AXIOS*/
import axios from 'axios';

class BlogPost extends React.Component {
  state = {
    Titulo: [],
    Fecha: [],
    Body: [],
    ImgUrl: [],
    UserName:[]
  }
  componentWillMount() {
    //OBTENER RUTA DE ARTICULO
    // {this.props.match.params.ruta}
    axios.get(`http://localhost:8082/api/articulo/${this.props.match.params.articuloId}`)
      .then(res => {
        const datosArticulo = res.data;
        this.setState({ 
        Titulo:datosArticulo.map(nombre=>nombre.Nombre),
        Fecha:datosArticulo.map(nombre=>nombre.Fecha),
        Body:datosArticulo.map(nombre=>nombre.Body),
        ImgUrl:datosArticulo.map(nombre=>nombre.ImgUrl),
        UserName:datosArticulo.map(nombre=>nombre.UserName),
        
        });
        // console.log(this.state.datosArticulo.map(nombre=>nombre.Nombre))
      })
  }
  Facebook = () => {
    window.location.assign('https://www.facebook.com/TwoDifferentMinds');
  }
  Instagram = () => {
    window.location.assign('https://www.instagram.com/twodifferentminds/');
  }
  Twitter = () => {
    window.location.assign('https://twitter.com/TDifferentMinds');
    
  }
  render() {
    return (
      <div>
        <Navcontent></Navcontent>
        <Header></Header>
        <Container maxWidth="lg" className="espacio-header">
          <Grid container spacing={4}>
            <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
              <Typography align="left" variant="h4">
                {this.state.Titulo}
            </Typography>
            <Typography align="left" variant="subtitle1" color="textSecondary">
                {"Escrito por: "+ this.state.UserName}
            </Typography>
              <Typography align="left" variant="subtitle1" color="textSecondary">
                {this.state.Fecha}
            </Typography>
              <Card className="img-card">
                <CardMedia className="img-art" image={Imagen} title="titulo" />
              </Card>
              <p className="text-align" dangerouslySetInnerHTML={{__html:this.state.Body}}>
                
              </p>
              <Typography align="left" variant="subtitle1" color="textSecondary">
                TEMAS:
            </Typography>
              <div className="tags">
                <Tags />
                <Tags />
                <Tags />
                <Tags />
                <Tags />
              </div>
              <Divider />
              <Typography
                align="left"
                variant="subtitle1"
                color="textSecondary"
                gutterBottom
              >
                TAMBIÉN TE PODRÍA GUSTAR
            </Typography>
              <Grid container spacing={2}>
                <Grid item xl={6} sm={6} md={6} xs={12}>
                  <MiniCards titulo="Titulo del articulo" />
                </Grid>
                <Grid item xl={6} sm={6} md={6} xs={12}>
                  <MiniCards titulo="Titulo del articulo" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
              <Grid container spacing={1}>
                <Grid item xl={12} lg={12} sm={12} xs={12}>
                  <Divider />
                  <Typography
                    align="left"
                    variant="subtitle1"
                    color="textSecondary"

                  >
                    SÍGUENOS
                </Typography>
                  <Typography align="left" display="block">
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      size="2x"
                      style={{ color: "#3b5998", margin: 5, cursor: "pointer" }}
                      onClick={this.Facebook}
                    />
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="2x"
                      style={{ color: "#00acee", margin: 5, cursor: "pointer"}}
                      onClick={this.Twitter}
                    />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2x"
                      style={{ color: "#E1306C", margin: 5, cursor: "pointer" }}
                      onClick={this.Instagram}
                    />
                  </Typography>
                  <Divider />
                </Grid>
                <Hidden smDown>
                  <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Typography
                      align="left"
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      MÁS ARTÍCULOS <p>{this.props.match.params.idUrl}</p>
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                        <MiniCards titulo="Titulo del articulo" />
                      </Grid>
                      <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                        <MiniCards titulo="Titulo del articulo" />
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default BlogPost;
