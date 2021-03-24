import { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 0,
      numCols: 0,
      selectedColor: "red"
    }
  }

  /*Modified by: Caitlin-Dawn Sangcap */
  addRow = () => {

      /* Added the if-else portion to account for the case of
       * the Add Row button being pressed first */

      if (this.state.numRows === 0) {
          this.setState(state => {
              return { numRows: state.numRows + 1, numCols: state.numCols + 1 }
          });
      }

      else {
          this.setState(state => {
              return { numRows: state.numRows + 1 }
          });
      }
    
  }
  /*Modified by: Caitlin-Dawn Sangcap */
  addColumn = () => {
    /* Added the if-else portion to account for the case of
     * the Add Column button being pressed first */
     if (this.state.numCols === 0) {
       this.setState(state => {
          return { numRows: state.numRows + 1, numCols: state.numCols + 1 }
       });
     }
     else {
       this.setState(state => {
          return { numCols: state.numCols + 1 }
       });
     }
  }

  //Modified by James Yoo
  //This function will fill all the cell's color to the selected color from the dropdown
  fillAll = () => 
  {
    for (let i=0; i<this.state.numRows*this.state.numCols; i++) //number of table cells is numrows*numcols
    {
      let tds=document.getElementsByTagName("td");            //Use the DOM element to get the cells
      tds[i].style.backgroundColor=this.state.selectedColor;  //change the color for each of the cells through this loop
    }
  }
  
  //Modified by James Yoo 
  //This function will clear all the cell's current color to white. 
  clearAll = () => 
  {
    for (let i=0; i<this.state.numRows*this.state.numCols; i++) //number of table cells is numrows*numcols
    {
      let tds=document.getElementsByTagName("td");  //Use the DOM element to get the cells
      tds[i].style.backgroundColor="white";         //reset the color for each of the cells through this loop
    }
  }

  //Modified by Alfonso Gunawan
  //This function will fill all the uncolored cells (white cells) to the selected color from the dropdown
  fillAllU = () => 
  {
    let tds=document.getElementsByTagName("td");            //Use the DOM element to get the cells
    for (let i=0; i<this.state.numRows*this.state.numCols; i++) //number of table cells is numrows*numcols
    {
      if (tds[i].style.backgroundColor === "" || tds[i].style.backgroundColor === "white")             //If condition to catch all the 
      {
        tds[i].style.backgroundColor=this.state.selectedColor;  //change the color for each of the cells through this loop
      }
    }
  }

  /***************** START REMOVE ROW METHOD  ***********************/
  // Worked on by: IFTE AHMED
  removeRow = () => {
    if (this.state.numRows > 0) {
      this.setState(state => { //removes 1 row
        return { numRows: state.numRows - 1 }
      });
    }else{
      alert("NOPE!") //alerts user that they cant remove no more
      this.setState(state => { //resets the numCols value to zero
        return { numCols: state.numCols = 0 }
      });
    }
  }
  /***************** END OF REMOVE ROW METHOD  ***********************/

  /***************** START REMOVE COLUMN METHOD  ***********************/
  //Worked on by: IFTE AHMED
  removeCol = () => {
    if (this.state.numCols > 0) {
      this.setState(state => { //removes 1 column
        return { numCols: state.numCols - 1 }
      });
    }else{
      alert("NOPE!") //alerts user that they cant remove no more
      this.setState(state => { //resets the numRows value to zero
        return { numCols: state.numRows = 0 }
      });
    }
  }
  /***************** END OF REMOVE COLUMN METHOD  ***********************/
  
  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<TableRow numCols={this.state.numCols} handleApplyColor={this.handleApplyColor} />);
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeCol}>Remove Column</button>
        <button onClick={this.clearAll}>Clear All </button>
        <button onClick={this.fillAll}> Fill All </button>
        <button onClick={this.fillAllU}>Fill Uncolored</button>
        <select onChange={this.handleColorChange}>
        <option value="select">select</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="green">green</option>

        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}
