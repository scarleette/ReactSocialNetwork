import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from '../src/components/Login/Login';
import Registro from './components/registro/Registro';
import VistaMuro from './components/Muro/VistaMuro';
import Perfil from '../src/components/Perfil/Perfil';


class App extends Component {
  render() {
    return (
      
        <Router basename={process.env.PUBLIC_URL + '/'}>
          <div>
          <Route exact path="/" component={Login}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/perfil" component={Perfil}/>
          <Route path="/muro" component={VistaMuro}/>
          </div>
        </Router>
      
    
    );
  }
}

export default App;