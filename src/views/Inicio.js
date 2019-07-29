import React from "react";
import { Container } from "@material-ui/core";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
class Inicio extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xl={11} lg={10} md={10} xs={12}>
          <Typography variant="h6" component="h1">
              Hola
            </Typography>
          </Grid>
          <Grid item xl={1} lg={2} md={2} xs={12}>
            <Typography variant="h6" component="h1">
              Síguenos en:
            </Typography>
            <Divider></Divider>
            <Typography variant="h6" component="h1">
              Compartir 
            </Typography>
            <Divider></Divider>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default Inicio;
