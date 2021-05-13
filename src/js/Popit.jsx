import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';
import TableIt from './TableIt';

export default class Popit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose(){
   this.setState({ show: false });
  }
  handleShow(){
    this.setState({ show: true });
  }
  render(){
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
        { this.props.title }
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose} animation={ false }>
          <Modal.Header closeButton>
            <Modal.Title>{ this.props.title }</Modal.Title>
          </Modal.Header>
          <Modal.Body><TableIt rowItems={ this.props.rowItems } /></Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
}