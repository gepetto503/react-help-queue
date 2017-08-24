import Moment from "moment";

class Ticket {
  constructor(names, location, description) {
    this.names = names;
    this.location = location;
    this.description = description;
    this.timeOpened = new Moment();
    this.timeSinceOpened = this.timeOpened.fromNow(true);
    console.log(this);
  }
  // 
  // setTimeSinceOpened() {
  //   this.timeSinceOpened =
  // }
}

export default Ticket;
