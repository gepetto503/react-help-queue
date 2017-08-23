//imports
import React from "react";
import NewTicketForm from "./NewTicketForm";

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
    const formIsVisibleOnPage = this.state.formIsVisibleOnPage;
    let formAreaContent = null;
    if (formIsVisibleOnPage){
      formAreaContent = <NewTicketForm/>
    } else {
       formAreaContent = <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>;
    }

    return (
      <div>
        {formAreaContent}
      </div>
    );
  }

}

export default NewTicketControl;
