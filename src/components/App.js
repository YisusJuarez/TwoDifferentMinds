import React from "react";
import "../css/App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../views/Inicio";
import BlogPost from "../views/BlogPost";
import Footer from "../components/Footer";
import CategoryPosts from "../views/CategoryPosts";

class App extends React.Component {


  render() {
    return (
      <div className="App">
        {/* <ButtonAppBar /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/articulo/undefined" component={Inicio} />
            <Route exact path="/seccion/:section" component={CategoryPosts} />
            <Route path="/articulo/:articuloId" component={BlogPost} />
            <Route render={() => <div>404 Not Found</div>} />
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
