import React from "react";
// import Navcontent from "../components/Navcontent";
import Cards from "../components/Cards";
import Header from "../components/Header";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
class CategoryPosts extends React.Component {
    state = {
        articulosBySection: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8082/api/seccion/${this.props.match.params.section}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo
                });
            })

    }
    render() {
        console.log(this.state.articulosBySection)
        return (

            <div>
                <Header></Header>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {this.state.articulosBySection.map((articulo, key) => (
                            <Grid key={key} item md={4} xs={12} lg={4} sm={6}>
                                <Cards key={key} titulo={articulo.Nombre} fecha={articulo.Fecha} ruta={articulo.ImgUrl}></Cards>
                            </Grid>
                        ))}
                    </Grid>
                </Container>


            </div>

        )
    }
}
export default CategoryPosts;