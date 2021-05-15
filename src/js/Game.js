import React from 'react';
import '../css/index.css';
import Board from './Board'
import calculateWinner from './calculateWinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Popit from './Popit';
import Navbar from 'react-bootstrap/Navbar';
import ToastIt from './ToastIt';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      score: { x: 0, o: 0},
      xIsNext: true,
      log: [],
      showToast: false
    };
    this.baseState = this.state;
    this.toggleToast = this.toggleToast.bind(this);
  }
  reset = () => {
    this.setState(this.baseState);
  }
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const turn = this.state.xIsNext ? "X" : "O";
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = turn;
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      log: this.state.log.concat([turn + " Selected: " + i%3 + '|' + Math.floor(i/3)])
    });
    this.setState({
      showToast: true
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      log: this.state.log.concat(["Time Traveled to move: " + step])
    });
  }

  toggleToast(){
    this.setState({
      showToast: false
    });
  }
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <Button onClick={() => this.jumpTo(move)}>{desc}</Button>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <>
        <Navbar variant="dark" bg="dark">
          <Container>
            <Navbar.Brand href="#">TicTacToe</Navbar.Brand>
            <Popit title="Time Travel" rowItems={ moves }/>
            <Popit title="Log" rowItems={ this.state.log }/>
            <Button variant="danger" onClick={ this.reset }>Reset</Button>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <h4>{ status }</h4>
          </Row>
          <Row className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </Row>
        </Container>
        <ToastIt toggleText={ this.state.log[this.state.log.length - 1]} show={ this.state.showToast} onClose={ this.toggleToast }/>
      </>
    );
  }
}