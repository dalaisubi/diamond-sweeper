import React, { Component } from 'react';
/*import './App.css';
*/
class GameBoard extends Component {
  constructor(){
    super();
    this.state = {
      info: []
    }
  }
  componentDidMount() {
      fetch('/api/products')
        .then(res => res.json())
        .then(product_info => this.setState({product_info}, () => console.log("Here's the data coming from backend", product_info)));
    }
  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default GameBoard;
