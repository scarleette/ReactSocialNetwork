import React, { Component } from 'react';
import './vistaMuro.css';
import Navbar from '../Common/Navbar';
import Comentario from './Comentario';
import Carrusel from '../Common/Carrusel';




class VistaMuro extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    return (
      <div>
        <div>
          <Navbar/>
          <Carrusel/>
        </div>
        <div>
          <Comentario/>
        </div>
      </div>
    )
  }
}

export default VistaMuro;