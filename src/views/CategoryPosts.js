import React from "react";
import Button from '@material-ui/core/Button';
import Cards from "../components/Cards";
import Header from "../components/Header";
import axios from 'axios';
import "../css/CategoryPosts.css";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
class CategoryPosts extends React.Component {
    state = {
        articulosBySection: [],
        nextArt: 6
    }
    componentDidMount() {
        axios.get(`http://prosisdev.sytes.net:84/api/seccion/${this.props.match.params.section}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo
                });
            })
        console.log(this.state.nextArt)

    }
    nextrows = () => {
        var nextActual = this.state.nextArt;
        axios.get(`http://prosisdev.sytes.net:84/api/seccion/${this.props.match.params.section}/${this.state.nextArt}`)
            .then(res => {
                const datosArticulo = res.data.data;
                this.setState({
                    articulosBySection: datosArticulo,
                    nextArt: nextActual + 6
                });
                console.log(this.state.nextArt)
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
                    <Button onClick={this.nextrows} variant="contained" className="colorButton">Más Artículos</Button>
                </Container>


            </div>

        )
    }
}
export default CategoryPosts;