import React from 'react';
import '../css/App.css';
import ButtonAppBar from './Navbar';
import Navcontent from './Navcontent';
//Prueba de vistas

import Inicio from "../views/Inicio";

//Browser Router para enlazar vistas
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Navcontent></Navcontent>
      <Inicio></Inicio>
    </div>
  );
}

export default App;
