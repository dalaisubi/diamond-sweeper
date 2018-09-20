import React, { Component } from 'react';
import './stylesheets/style.css';
import EachRow from './each_row.js';

class GameBoard extends Component {
  constructor(){
    super();
    this.random_number_generator = this.random_number_generator.bind(this);
    this.state = {
      info: [],
      arr: [1,2,3,4,5,6,7,8],
      cell_of_diamond : []
    }
  }
  random_number_generator(){
    var x = 1;
    var y = 8;
    var random_ = Math.floor(Math.random() * ((y-x)+1) + x) * 10 + Math.floor(Math.random() * ((y-x)+1) + x);
    return random_;
  }

  componentDidMount() {
    var new_arr = this.state.cell_of_diamond;
    while(new_arr.length < 8){
      var new_number = this.random_number_generator();
      if (new_arr.indexOf(new_number) === -1){
        new_arr.push(new_number);
      }
    }
    

    fetch('/api/products')
      .then(res => res.json())
      .then(product_info => this.setState({product_info}, () => console.log("Here's the data coming from backend", product_info)));
    }
  render() {
    return (
      <div>
        <div id="container">
          <div>
            <div className="messages"></div>
            <table className="diamondsweeper-board">
              <tbody>
              {
                this.state.arr.map((number) => <EachRow row={number} cell_of_diamond={this.state.cell_of_diamond} />)
              }                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default GameBoard;
