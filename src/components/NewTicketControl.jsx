//imports
import React from "react";
import NewTicketForm from "./NewTicketForm";
import PropTypes from "prop-types";

//establishes react component with class name
class NewTicketControl extends React.Component {

  //don't know what super does
  //establishes beginning state
  constructor(props) {
   super(props);
   this.state = {formIsVisibleOnPage: false};
   this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  //our event handler method for when the button is clicked
  handleDisplayingNewTicketForm(event){
    this.setState({formIsVisibleOnPage: true});
    console.log(this.state);
  }

  //what to render in reacts virtual dom
  render(){
    //set a variable within the scope of this render function that is equal to the state value for formIsVisibleOnPage?
    const formIsVisibleOnPage = this.state.formIsVisibleOnPage;

    //set a variable, to be displayed in the return, that starts out null
    let formAreaContent = null;

    //if the local version of the state value for formIsVisibleOnPage is true, then display NewTicketForm.  pass the function onNewTicketCreationdown to NewTicketForm as a prop
    if (formIsVisibleOnPage){
      formAreaContent = <NewTicketForm
        onNewTicketCreation = {this.props.onNewTicketCreation}/>
    }
    //if not, display button
    else {
       formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }
    return (
      <div>
        {formAreaContent}
      </div>
    );
  }

}

NewTicketControl.propTypes = {
  onNewTicketCreation: PropTypes.func
}


export default NewTicketControl;
