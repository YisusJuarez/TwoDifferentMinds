import React from "react";
import Header from "../components/Header";
import "../css/Inicio.css";
import Cards from "../components/Cards";
import { Container } from "@material-ui/core";
import { Link } from 'react-router-dom';
// Grid para maquetacion de cards
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import Navcontent from "../components/Navcontent";
//Axios
import axios from 'axios';


class Inicio extends React.Component {
  state = {
    art1: [],
    art2: [],
    art3: [],
    art4: [],
    art5: [],
    art6: [],
    art7: [],
    art8: [],
    art9: [],
    section:[]
  };

  componentDidMount() {
    //OBTENER ARTICULOS DE INICIO
    axios.get(`http://localhost:8082/api/inicio`)
      .then(res => {
        if(res){
          let datosArticuloInicio = res.data.data;
          this.setState({
            art1: datosArticuloInicio[0],
            art2: datosArticuloInicio[1],
            art3: datosArticuloInicio[2],
            art4: datosArticuloInicio[3],
            art5: datosArticuloInicio[4],
            art6: datosArticuloInicio[5],
            art7: datosArticuloInicio[6],
            art8: datosArticuloInicio[7],
            art9: datosArticuloInicio[8],
            section:datosArticuloInicio[9]
          }); 
        } 
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Navcontent section={this.state.section}></Navcontent>
        <Header />
        <Container maxWidth="lg">
          <Typography variant="h5" align="left" gutterBottom>
            Artículos Recientes
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards titulo={this.state.art1.Nombre} fecha={this.state.art1.Fecha}  ruta={this.state.art1.ImgUrl}/>
            </Grid>
             <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards titulo={this.state.art2.Nombre} fecha={this.state.art2.Fecha}  ruta={this.state.art2.ImgUrl}/>
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={12}>
              <Cards titulo={this.state.art3.Nombre} fecha={this.state.art3.Fecha}  ruta={this.state.art3.ImgUrl}/>
            </Grid>
            <Grid item md={8} xs={12} lg={8} sm={6}>
              <Cards titulo={this.state.art4.Nombre} fecha={this.state.art4.Fecha}  ruta={this.state.art4.ImgUrl}/>
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards titulo={this.state.art5.Nombre} fecha={this.state.art5.Fecha}  ruta={this.state.art5.ImgUrl}/>
            </Grid>
           </Grid>
         <Divider variant="fullWidth" className="divider" />
          <Typography variant="h5" align="left" gutterBottom>
            Artículos Recomendados
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards titulo={this.state.art6.Nombre} fecha={this.state.art6.Fecha}  ruta={this.state.art6.ImgUrl}/>
            </Grid>
            <Grid item md={8} xs={12} lg={8} sm={6}>
              <Cards titulo={this.state.art7.Nombre} fecha={this.state.art7.Fecha}  ruta={this.state.art7.ImgUrl}/>
            </Grid>
            <Grid item md={8} xs={12} lg={8} sm={6}>
              <Cards titulo={this.state.art8.Nombre} fecha={this.state.art8.Fecha} ruta={this.state.art8.ImgUrl}/>
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards titulo={this.state.art9.Nombre} fecha={this.state.art9.Fecha}  ruta={this.state.art9.ImgUrl}/>
            </Grid>
          </Grid>
          <Link to={`/inicio/all`}><Button className="colorButton" variant="contained" size="small" >
          Más Artículos
        </Button></Link>
        </Container>
      </div>
    );
  }
}
export default Inicio;
