import React, { Component } from 'react';
import EachCell from './each_cell';

class EachRow extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		total_cell: [1,2,3,4,5,6,7,8],
  		cls_blank: "unknown"
  	}

  }	
  componentDidMount(){
  	var N = 8; 
	var a = Array.apply(null, {length: N}).map(Number.call, Number);
  }

  render() {
    return (        
        <tr>
        	{
        		this.state.total_cell.map((number) =>
        			<EachCell cell={number} {...this.props} />
        		)
        	}
        </tr>
    );
  }
}

export default EachRow;
