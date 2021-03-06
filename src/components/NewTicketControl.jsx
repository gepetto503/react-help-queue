import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";
import { Button }  from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {
      formModalIsShowing: false
    };
  }

  showFormModal(){
    this.setState({
      formModalIsShowing: true
    });
  }

  hideFormModal(){
    this.setState({
      formModalIsShowing: false
    });
  }

  //what to render in reacts virtual dom
  render(){
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.showFormModal}>
            Request Help!
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
           <Modal.Header>
             <Modal.Title>Request Help</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <NewTicketForm
              onNewTicketCreation={this.props.onNewTicketCreation}
              hideFormAfterSubmission = {this.hideFormModal}/>
           </Modal.Body>
         </Modal>
      </div>
    );
  }
}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
};


export default NewTicketControl;
