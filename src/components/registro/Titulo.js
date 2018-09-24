import React from 'react';
import {Row,} from 'react-materialize';

const Titulo = (props) => {
  return (
    <div className= "Titulo">
      <Row>
        <h2>{props.titulo}</h2>
      </Row>
    </div>
  )
};

export default Titulo;