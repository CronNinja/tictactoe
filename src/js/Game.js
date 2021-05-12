import React from 'react';
import Board from './Board'
import calculateWinner from './calculateWinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TableIT from './TableIT';

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
      xIsNext: true,
      log: []
    };
    this.baseState = this.state;
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
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
      log: this.state.log.concat(["Time Traveled to move: " + step])
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
      <Container>
        <Row>
          <Col md={4}><h2>{ status }</h2></Col>
          <Col md={{ span: 4, offset: 4 }}><Button variant="danger" onClick={this.reset}>Reset</Button></Col>
        </Row>

        <Row className="game-board justify-content-md-center">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
        </Row>
        <Row>
          <Col md="auto">
            <TableIT rowItems={ moves } name="Time Travel"/>
          </Col>
          <Col md="auto">
            <TableIT rowItems={ this.state.log } name="Log"/>
          </Col>
        </Row>
        
      </Container>
    );
  }
}