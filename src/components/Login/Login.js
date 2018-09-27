import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Titulo from '../registro/Titulo';
import Registro from '../registro/Registro';
import SignInForm from './SignInForm';
import LoginGoogle from './LoginGoogle';
import './Login.css';


const Login = () =>{

	return (

		<Router basename={process.env.PUBLIC_URL + '/'}>
			<div className = "containerLogin">
				<Titulo titulo="Little Pet Society" />
				<SignInForm />
				<LoginGoogle/>
				<a href={process.env.PUBLIC_URL + '/registro'}>Registrate con Nosotros</a>
				<Route path="/registro" component={Registro}></Route>   
			</div>
		</Router>
	)
    }


export default Login;