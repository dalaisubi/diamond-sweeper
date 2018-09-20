import React, { Component } from 'react';

var total_score = 64;
var collected_diamond = 0;

class EachCell extends Component {
  constructor(props) {
  	super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      class_name: "unknown",
    }
  }	
  handleClick(event){
    var current_class = event.target.attributes[1].value;
    
    if(current_class === "cell unknown" && collected_diamond < 8) {
      console.log(current_class,'=======');
      var index = parseInt(event.target.getAttribute('id'));
      if (this.props.cell_of_diamond.indexOf(index) > -1){
        this.setState({
          class_name : "diamond",
        }); 
        collected_diamond = collected_diamond + 1;    
      }
      else {
        this.setState({
          class_name : "blank",
        });
      }
      total_score = total_score - 1;
    }
    
  }	
  render() { 
    console.log(total_score, collected_diamond);    
    return (        
          <td data-tag={this.state.class_name} id={this.props.row + "" + this.props.cell} onClick={this.handleClick} >
            
            <div id={this.props.row + "" + this.props.cell} className={"cell " + this.state.class_name}>
              
            </div>
          </td>
    );
  }
}

export default EachCell;
