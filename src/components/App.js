import React from "react";
import "../css/App.css";
import ButtonAppBar from "./Navbar";
import Navcontent from "./Navcontent";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../views/Inicio";
import BlogPost from "../views/BlogPost";
import Footer from "../components/Footer";

//Browser Router para enlazar vistas
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <div className="App">
      <ButtonAppBar />
      <Navcontent />
      <BrowserRouter>
        <Switch>
          <Route  exact path="/" component={Inicio} />
          <Route exact path="/articulo/:articuloId" component={BlogPost} />
          <Route render={()=><div>404 Not Found</div>} />
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
    )
  }
}

export default App;
