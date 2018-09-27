import React, { Component } from 'react';
import {Button, Icon, Input, Row} from 'react-materialize';
import firebase from '../../firebase/firebase';


class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: '',
      password: ''

    }

  this.handleChange = this.handleChange.bind(this);
  this.registrarUsuario = this.registrarUsuario.bind(this);

  }
 
  render() {
    return (
      <div>
        <Row>
            <Input s={12} placeholder = "First Name"><Icon>perm_identity</Icon></Input>
            <Input s={12} placeholder = "Last Name"><Icon>perm_identity</Icon></Input>
            <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email"><Icon>account_circle</Icon></Input>
            <Input s={12} value={this.state.password} onChange={this.handleChange} type="password" name="password"  placeholder="Password"><Icon >lock</Icon></Input>
        </Row>
          <div className = "button">
            <Button waves='light' onClick={this.registrarUsuario}><Icon>thumb_up</Icon>Registrate</Button>
          </div>
      </div>
    )
  }
  registrarUsuario(event) {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=>{console.log(user)})
    .catch((error) => {
        console.log(error);
      })
  }
  handleChange(e) {
  this.setState({ [e.target.name]: e.target.value });
  }
};

export default Formulario;