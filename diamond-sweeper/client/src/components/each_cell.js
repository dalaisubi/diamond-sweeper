import React, { Component } from 'react';


class EachCell extends Component {
  constructor(props) {
  	super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      class_name: "unknown",
      count: 64
    }
  }	
  handleClick(event){
    console.log(this.props.cell_of_diamond);
    var index = parseInt(event.target.getAttribute('id'));
    if (this.props.cell_of_diamond.indexOf(index) > -1){
      this.setState({
        class_name : "diamond",
        count: this.state.count - 1
      });     
    }
    else {
      this.setState({
        class_name : "blank",
        count: this.state.count - 1
      });
    }
    /*this.setState({
        count: this.state.count - 1
    });*/
  }	
  render() { 
    console.log(this.state.count);    
    return (        
          <td data-id={this.props.cell} id={this.props.row + "" + this.props.cell} onClick={this.handleClick} ><div id={this.props.row + "" + this.props.cell} className={"cell " + this.state.class_name}>{this.state.attempt}</div></td>
    );
  }
}

export default EachCell;
