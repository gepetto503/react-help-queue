//imports react library
import React from "react";

//establishes react component with class name
class NewTicketControl extends React.Component {

  //don't know what super does
  //establishes beginning state
  constructor(props) {
   super(props);
   this.state = {formVisibleOnPage: false};
   this.handleDisplayingNewTicketForm = this.handleDisplayingNewTicketForm.bind(this);
  }

  //our event handler method for when the button is clicked
  handleDisplayingNewTicketForm(event){
    this.setState({formVisibleOnPage: true});
    console.log(this);
  }

  //what to render in reacts virtual dom
  render(){
    let formAreaContent = null;
    if (this.state.formVisibleOnPage) {
      formAreaContent = <h1>Form will eventually go here!</h1>
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

//only one thing is exported: the class NewTicketControl
export default NewTicketControl;
