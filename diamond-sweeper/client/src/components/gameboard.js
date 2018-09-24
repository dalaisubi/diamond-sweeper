import React, { Component } from 'react';
import './stylesheets/style.css';
import EachRow from './each_row.js';

class GameBoard extends Component {
  constructor(){
    super();
    this.random_number_generator = this.random_number_generator.bind(this);
    this.shouldBlank = this.shouldBlank.bind(this);
    this.totalScore = this.totalScore.bind(this);
    this.index_of_diamond = this.index_of_diamond.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
    this.state = {
      info: [],
      arr: [1,2,3,4,5,6,7,8],
      cell_of_diamond : [],
      shouldBlank_arr: [],
      cell_class: 'unknown',
      total_score: 0
    }
  }

  tryAgain(){
    window.location.reload();
  }

  totalScore(total) {
    
    this.setState({
      total_score: total
    })

  }
  shouldBlank(cell_index) {
      this.state.shouldBlank_arr.push(cell_index);
  }
  random_number_generator(){
    var x = 1;
    var y = 8;
    var random_ = Math.floor(Math.random() * ((y-x)+1) + x) * 10 + Math.floor(Math.random() * ((y-x)+1) + x);
    return random_;
  }

  index_of_diamond(){ 
    var new_arr = this.state.cell_of_diamond;
    while(new_arr.length < 8){
      var new_number = this.random_number_generator();
      if (new_arr.indexOf(new_number) === -1){
        new_arr.push(new_number);
      }
    }
  }
  componentDidMount() {
    this.index_of_diamond();
    
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
                this.state.arr.map((number) => <EachRow shouldBlank={this.shouldBlank} row={number} cell_of_diamond={this.state.cell_of_diamond} shouldBlank_arr={this.state.shouldBlank_arr}
                  class_name={this.state.cell_class} score={this.totalScore}/>)
              }              
                
              </tbody>
            </table>
          </div>
          {
            this.state.total_score > 0 ? 
            <div>
              <div className="score-card">
                Your Score: <span className="score-num">{this.state.total_score} </span>
              </div>
              <div className="score-card try-again" onClick={this.tryAgain}>
                Try Again
              </div>
            </div> : ""
          }
                    
        </div>
      </div>
    );
  }
}

export default GameBoard;
