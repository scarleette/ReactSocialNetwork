import React, {Component} from 'react';












// import React from 'react';
// import SignInForm from '../Login/SignInForm';

// class SignInForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
      
//       email: '',
//       password: '',
//       usuarioLogueado: null

//     }

//   this.handleChange = this.handleChange.bind(this);
//   this.usuarioLogueado = this.usuarioLogueado.bind(this);

//   }
//   handleChange(e) {
//     this.setState({ [e.target.name]: e.target.value });
// }
// usuarioLogueado(event) {
//   event.preventDefault();
//   firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
    
//       console.log(error);
//     })
// }

 
//   render() {
//         return (
//       <div>
//       {this.state.user ? ( <Perfil/>) : (<Login />)} 
//       </div>
//     )
    
//   }
// }