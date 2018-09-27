import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase';
import Titulo from '../registro/Titulo';
import Registro from '../registro/Registro';
import SignInForm from './SignInForm';
import LoginGoogle from './LoginGoogle';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    login(e) {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
				}).then((u)=>{console.log(u)})
				.catch ((error) =>{
					console.log(error);
					
				})
		}
		render() {
			return (
			
      <Router basename = { process.env.PUBLIC_URL + '/' } >
        <div className = "containerLogin" >
        <Titulo titulo = "Little Pet Society"/>
        <SignInForm />
        < LoginGoogle />
        <a href = { process.env.PUBLIC_URL + '/registro' } > Registrate con Nosotros </a> 
				<Route path = "/registro"
        component = { Registro } > </Route>    </div > 
			</Router>
	
			)
		}
	}
export default Login;