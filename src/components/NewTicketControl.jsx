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
    return (
      <button onClick={this.handleDisplayingNewTicketForm}>Request Help</button>
    );
  }

}

//only one thing is exported: the class NewTicketControl
export default NewTicketControl;
