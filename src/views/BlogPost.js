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

/*Icons FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
/*Responsiveness */
import Hidden from "@material-ui/core/Hidden";

class BlogPost extends React.Component {
  render() {
    return (
      <Container maxWidth="lg" className="espacio-header">
        <Grid container spacing={4}>
          <Grid item xl={9} lg={9} md={9} sm={12} xs={12}>
            <Typography align="left" variant="h4">
              FaceApp, ¿Un Peligro Para Nuestros Datos?
            </Typography>
            <Typography align="left" variant="subtitle1" color="textSecondary">
              21/08/2019 
            </Typography>
            <Card className="img-card">
              <CardMedia className="img-art" image={Imagen} title="titulo" />
            </Card>
            <p Style="text-align: justify;">
              Las modas son pasajeras y pueden comenzar de un solo click, de
              hacer algo viral, pueden provenir de un video, de una imagen que
              es difundida a todo el mundo a trav&eacute;s de las distintas
              redes que se interconectan por el internet; en esta ocasi&oacute;n
              le toco a la aplicaci&oacute;n de FaceApp, la cual usa filtros
              para mostrar la apariencia de las personas al llegar a la vejez.
            </p>
            <p Style="text-align: justify;">&nbsp;</p>
            <p Style="text-align: justify;">
              La persona que no haya visto alguna imagen con este filtro, de
              plano no ten&iacute;a internet, puesto que miles de artistas y
              youtubers optaron por hacer del filtro un nuevo challenge,
              haciendo tr&aacute;fico en las redes sociales alrededor del mundo
              por ver c&oacute;mo eran de viejitos, en instagram se encontraban
              seguidas y que decir de Facebook.
            </p>
            <p Style="text-align: justify;">&nbsp;</p>
            <p Style="text-align: justify;">
              Sin embargo no todo es diversi&oacute;n, puesto que la
              aplicaci&oacute;n utiliza nuestros valiosos datos personales
              teniendo como consecuencia que lleguen a manos de terceras
              personas y el uso que le den, no sea tan bueno. No es culpa solo
              de las aplicaciones que muestran una pol&iacute;tica de privacidad
              muy opaca, sino que, a las personas les da &ldquo;flojera&rdquo;
              leer esas pol&iacute;ticas, debido a esto vamos perdiendo nuestra
              privacidad en las redes digitales.
            </p>
            <p Style="text-align: justify;">&nbsp;</p>
            <p Style="text-align: justify;">
              FaceApp es una aplicaci&oacute;n rusa, donde nuestros datos son
              resguardados por los gobiernos donde se instale la App, no
              obstante, tambi&eacute;n son usados para proporcionar contenido
              personalizado, as&iacute; como&nbsp; para monitorear la calidad
              del servicio y por si fuera poco para diagnosticar o solucionar
              problemas que se hayan tenido con la app al usarla, es aqu&iacute;
              donde pensamos &iquest;en serio vale la pena estar a la moda?
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
                    style={{ color: "#3b5998", margin: 5 }}
                  />
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{ color: "#00acee", margin: 5 }}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ color: "#E1306C", margin: 5 }}
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
                    MÁS ARTÍCULOS
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
    );
  }
}
export default BlogPost;
