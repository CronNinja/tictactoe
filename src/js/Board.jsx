import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        key = {i}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  generateGrid(){
    let grid = [];
    for(let i = 0; i <9; i++){
      grid.push(this.renderSquare(i));
    }
    return (grid);
  }
  render() {
    return (
      <div className="grid-container">
          {this.generateGrid()}
      </div>
    );
  }
}