import React, { Component } from 'react';


class EachCell extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      class_name: ""
    }

  }		
  render() {
  	console.log(this.props.row, this.props.cell);
    var index = this.props.row * 10 + this.props.cell;
    var class_name = "unknown";
    if (this.props.cell_of_diamond.indexOf(index) > -1){
      class_name = "diamond";
    }
    return (        
          <td id={this.props.row + "" + this.props.cell}><div className={"cell " + class_name}></div></td>
    );
  }
}

export default EachCell;
