import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Titulo from '../registro/Titulo';
import Registro from '../registro/Registro';
import SignInForm from './SignInForm';
import LoginGoogle from './LoginGoogle';



const Login = () =>{

	return (

		<Router>
			<div className = "containerLogin">
				<Titulo titulo="Little Pet Society" />
				<SignInForm />
				<LoginGoogle/>
				<Link to="/registro">Registrate con Nosotros</Link>
				<Route path="/registro" component={Registro}></Route>   
			</div>
		</Router>
	)
    }


export default Login;