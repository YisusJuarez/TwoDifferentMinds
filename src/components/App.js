import React from 'react';
import '../css/App.css';
import ButtonAppBar from './Navbar';
import Navcontent from './Navcontent';
//Browser Router para enlazar vistas
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <Navcontent></Navcontent>
    </div>
  );
}

export default App;
