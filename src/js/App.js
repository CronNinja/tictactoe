import Game from './Game';
import '../css/index.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Jumbotron>
        <Container>
          <h1>Tic Tac Toe</h1>
        </Container>
      </Jumbotron>
      <Container>
          <Game />
      </Container>
    </> 
  );
}

export default App;
