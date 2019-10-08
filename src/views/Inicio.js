import React from "react";
import Header from "../components/Header";
import "../css/Inicio.css";
import Cards from "../components/Cards";
import { Container } from "@material-ui/core";
// Grid para maquetacion de cards
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import { InicioData } from "./qwergeek.json";
import Navcontent from "../components/Navcontent";
//Axios
import axios from 'axios';

class Inicio extends React.Component {
  state = {
    datos: InicioData,
    datosArticuloInicio: []
  };
  componentDidMount() {
    //OBTENER ARTICULOS DE INICIO
    axios.get(`http://localhost:8082/api/inicio`)
      .then(res => {
        const datosArticuloInicio = res.data;
        this.setState({ datosArticuloInicio });
        console.log(res.data);
      })
    return (console.log(this.state.datos.Destacados[0].url))
  }

  render() {

    return (
      <div>
        <Navcontent></Navcontent>
        <Header />
        <Container maxWidth="lg">
          <Typography variant="h5" align="left" gutterBottom>
            Artículos Recientes
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards titulo={this.state.datos.Destacados[0].Titulo} ruta={this.state.datos.Destacados[0].url} />
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards titulo={this.state.datos.Destacados[1].Titulo} ruta={this.state.datos.Destacados[0].url} />
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={12}>
              <Cards titulo={this.state.datos.Destacados[2].Titulo} ruta={this.state.datos.Destacados[0].url} />
            </Grid>
            <Grid item md={8} xs={12} lg={8} sm={6}>
              <Cards />
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards />
            </Grid>
          </Grid>
          <Divider variant="fullWidth" className="divider" />
          <Typography variant="h5" align="left" gutterBottom>
            Artículos Recomendados
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards />
            </Grid>
            <Grid item md={8} xs={12} lg={8} sm={6}>
              <Cards />
            </Grid>
            <Grid item md={8} xs={12} lg={8} sm={6}>
              <Cards />
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards />
            </Grid>
          </Grid>
        </Container>

      </div>
    );
  }
}
export default Inicio;
