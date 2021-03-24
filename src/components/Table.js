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
  clearAll = () => 
  {
    for (let i=0; i<this.state.numRows*this.state.numCols; i++)
    {
      let tds=document.getElementsByTagName("td");
      tds[i].style.backgroundColor="white";
    }
  }

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
        <button onClick={this.clearAll}>Clear All </button>
        <select onChange={this.handleColorChange}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;