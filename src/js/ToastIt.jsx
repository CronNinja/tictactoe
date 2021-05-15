import Toast from 'react-bootstrap/Toast';
import React from 'react';

export default class ToastIt extends React.Component {
  render(){
    return (
      <>
        <Toast
            style={{ position: 'absolute', bottom: 0, right: 0 }}
            onClose={ this.props.onClose } show={ this.props.show } animation={ false } delay={2000} autohide>
          <Toast.Header>
            <strong className="mr-auto">{ this.props.toggleText }</strong>
          </Toast.Header>
        </Toast>
      </>
    );
  }
  
}