import React from "react";
import Header from "../components/Header";
import "../css/Inicio.css";
import Cards from "../components/Cards";
import { Container } from "@material-ui/core";
// Grid para maquetacion de cards
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container maxWidth="lg">
          <Typography variant="h5" align="left" gutterBottom>
            Artículos Recientes
          </Typography>
          <Grid container spacing={2}>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards />
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards />
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={12}>
              <Cards />
            </Grid>
            <Grid item md={8} xs={12} lg={8} sm={6}>
              <Cards />
            </Grid>
            <Grid item md={4} xs={12} lg={4} sm={6}>
              <Cards />
            </Grid>
            
          </Grid>
          <Divider variant="fullWidth"  className="divider"/>
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
