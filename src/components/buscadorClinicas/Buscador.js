import React, { Component } from 'react';
import Navbar from '../Common/Navbar';
import Carrusel from '../Common/Carrusel';
import Informacion from './Informacion';

class VistaBuscador extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <Carrusel/> */}
        {/* <h1>Buscador De Clinicas</h1> */}
        <Informacion />
      </div>
    )
  }

}

export default VistaBuscador;