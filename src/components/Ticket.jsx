import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <div>
      <h2>this is stuff from ticket component</h2>
      <h3>no props up in here yet</h3>
      <p>who got da props?</p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;
