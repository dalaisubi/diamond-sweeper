import React, { Component } from 'react';

var total_score = 64;
var collected_diamond = 0;

class EachCell extends Component {
  constructor(props) {
  	super(props);
    this.handleClick = this.handleClick.bind(this);
    this.nearestElement = this.nearestElement.bind(this);
    this.digits = this.digits.bind(this);
    this.state = {
      class_name: "unknown",
      new_cell: this.props.cell_of_diamond
    }
  }	

  digits(n) {
    return Array.from(String(n), Number)[0];
  }

  nearestElement(index){
    let arr_of_diamond = this.state.new_cell.sort() , result = 0;
    let min_digit = null, max_digit = null;

    if(arr_of_diamond[arr_of_diamond.length - 1] > index){

      for(let i=0; i<arr_of_diamond.length; i++ ) {
        max_digit = arr_of_diamond[i];
        if(arr_of_diamond[i-1] != undefined){
          min_digit = arr_of_diamond[i-1];
        } 
        if(max_digit > index){
          break;
        }        
      }
    }
    else {
      min_digit = arr_of_diamond[arr_of_diamond.length - 1];
    }

    if(min_digit == undefined && min_digit == null){
      return max_digit;
    }
    else if(max_digit == undefined && max_digit == null){
      return min_digit;
    }

    return index - min_digit < max_digit - index? min_digit : max_digit;

  }

  handleClick(event){
    var current_class = event.target.attributes[1].value;
    
    if(current_class === "cell unknown" && collected_diamond < 8) {

      var index = parseInt(event.target.getAttribute('id'));

      if (this.props.cell_of_diamond.indexOf(index) > -1){ 
        this.setState({ 
          class_name : "diamond",
        }); 
        collected_diamond = collected_diamond + 1;
        var new_arr = this.state.new_cell.indexOf(index);
        if (new_arr > -1) {
          this.state.new_cell.splice(new_arr, 1);
        };    
      }
      
      else if(this.props.cell_of_diamond.indexOf(index) == -1 && this.props.shouldBlank_arr.indexOf(index) == -1) {  
        let nearest_cell = this.nearestElement(index) , cls = null;
        if(nearest_cell < index ) { 
          cls = "arrow rotate-left";
          if(this.digits(nearest_cell) < this.digits(index)){
            cls = "arrow rotate-up";
          }
        }
        else { 
          cls = "arrow rotate-right";
          if(this.digits(nearest_cell) > this.digits(index)){
            cls = "arrow rotate-down";
          }
        }

        this.setState({
          class_name : cls,
        });
      }
      total_score = total_score - 1;

    }  
    if(collected_diamond == 8){
      this.props.score(total_score);
    }  
  }	
  componentDidMount(){ 
    /*let id = parseInt(this.props.row + "" + this.props.cell);
    if(this.props.shouldBlank_arr.indexOf(id) > -1) {
      this.setState({
        class_name : 'blank'
      });
    }
*/
  }
  render() { 
    let id = parseInt(this.props.row + "" + this.props.cell);
    let class_name = "cell "  + this.state.class_name ; 
    if(this.props.shouldBlank_arr.indexOf(id) > -1){
      console.log('ii')
      class_name = "cell blank";
    }
    /*else {
      this.props.shouldBlank(id);
    }*/
    return (        
          <td data-tag={this.state.class_name} id={this.props.row + "" + this.props.cell} onClick={this.handleClick} >
            
            <div id={this.props.row + "" + this.props.cell} className={class_name}>
              
            </div>
          </td>
    );
  }
}

export default EachCell;
