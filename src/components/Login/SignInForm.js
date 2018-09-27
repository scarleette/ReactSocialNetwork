import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Button, Icon, Input, Row} from 'react-materialize';
import firebase from '../../firebase/firebase';
import LoginGoogle from '../Login/LoginGoogle';
import Perfil from '../Perfil/Perfil';
import Login from './Login';



class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: '',
      password: '',
      usuarioLogueado: null

    }

  this.handleChange = this.handleChange.bind(this);
  this.usuarioLogueado = this.usuarioLogueado.bind(this);

  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}
usuarioLogueado(event) {
  event.preventDefault();
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((user)=>{console.log(user)})
  .catch((error) => {console.log(error);
    })
}

  render() {
     
    return (
      <div>
        <Row>
            <Input s={12} value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Email"><Icon>account_circle</Icon></Input>
            <Input s={12} value={this.state.password} onChange={this.handleChange} type="password" name="password"  placeholder="Password"><Icon >lock</Icon></Input>
        </Row>
        
          <div className = "button">
<<<<<<< HEAD
            <center><Button type="submit" waves='light' onClick={this.signup}><Icon left>send</Icon>Log In </Button></center>
=======
            <LoginGoogle/>  
            <center><Button waves='light' onClick={this.usuarioLogueado}><Icon left>send</Icon>Log In </Button></center>
>>>>>>> 72ff0138d135a82467704f25771ccebd4975b23f
          </div>
      </div>
    )
  }
 

  		
};

export default withRouter(SignInForm) ;