import React from "react";
import Ticket from "./Ticket";

function TicketList(props){

  return (
    <div>
      <Ticket location="3a" names="Thato and Haley" issue="Firebase won't save record"/>
      <h3>text from ticket list</h3>
    </div>
  );
}

export default TicketList;
