import React, {Component} from 'react';
import firebase from 'firebase';
import Perfil from '../Perfil/Perfil';
import Login from '../Login/Login';

class App extends Component{
  constructor() {
    super();

    this.state = ({
      user : null,
    });

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({user});

      } else {
        this.setState({user: null});
      }
    });
  }

  render() {

    return (
      <div>{this.state.user ? : ( <Perfil />) : (<Login />)} </div>
    )
  }
 } 


export default Autentificacion;












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