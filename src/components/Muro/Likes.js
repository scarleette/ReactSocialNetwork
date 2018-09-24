import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize';

class SecondScreen extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.contadorLikes.bind(this)}>Likes<Icon left>star</Icon> {this.state.contador} </Button>
      </div>
    )
  }

  contadorLikes() {
    this.setState({
      contador: this.state.contador + 1
    })
  }
}

export default SecondScreen;