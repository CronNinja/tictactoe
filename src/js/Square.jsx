import Button from 'react-bootstrap/Button';
function Square(props) {
  return (
    <Button variant="secondary" className="square" onClick={ props.onClick }>
      {props.value}
    </Button>
  );
}

export default Square