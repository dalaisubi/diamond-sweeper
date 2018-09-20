import React, { Component } from 'react';
import EachCell from './each_cell';

class EachRow extends Component {
  constructor(props) {
  	super(props);
  	//this.handleClick = this.handleClick.bind(this);
  	this.state = {
  		total_cell: [1,2,3,4,5,6,7,8],
  		attempt: 0
  	}

  }	
  /*handleClick(){
  	console.log("ooooo");
  	this.setState({
  		attempt: this.state.attempt + 1
  	});
  }*/
  componentDidMount(){
  	var N = 8; 
	var a = Array.apply(null, {length: N}).map(Number.call, Number);
  }

  render() {
  	console.log(this.props.attempt);
    return (        
        <tr>
        	{
        		this.state.total_cell.map((number) =>
        			<EachCell cell={number} row={this.props.row} cell_of_diamond={this.props.cell_of_diamond} />
        		)
        	}
          {/*<td id={this.props.row + "1"}><div className="cell unknown"></div></td>
          <td id={this.props.row + "2"}><div className="cell unknown"></div></td>
          <td id={this.props.row + "3"}><div className="cell unknown"></div></td>
          <td id={this.props.row + "4"}><div className="cell unknown"></div></td>
          <td id={this.props.row + "5"}><div className="cell unknown"></div></td>
          <td id={this.props.row + "6"}><div className="cell unknown"></div></td>
          <td id={this.props.row + "7"}><div className="cell diamond"></div></td>
          <td id={this.props.row + "8"}><div className="cell unknown"></div></td>*/}
        </tr>
    );
  }
}

export default EachRow;
