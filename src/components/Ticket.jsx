import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <div>
      <h2>{props.names}</h2>
      <h3>no props up in here yet</h3>
      <p>who got da props?</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;
