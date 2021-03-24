import React, { Component } from "react";
import { getAllEvents } from "../../redux/actions/eventActions";
import { connect } from "react-redux";
import moment from "moment";

class EventsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    await this.props.getAllEvents();
    let req = this.props.event.event;
    req = Object.values(req);
    this.setState({
      data: req,
    });
  }

  render() {
    return (
      <div>
        {this.state.data.map((event) => (
          <div key={event._id}>
            <div className="eventsCon">
              <div className="eventsTop">
                <div className="eventsTopLeft">
                  <div className="contentCard">
                    <p className="weekDay">
                      {moment(event.eventStarts).format("MMM")}
                    </p>
                    <p className="monthDay">
                      {moment(event.eventStarts).format("DD")}
                    </p>
                  </div>
                </div>
                <div className="eventsTopRight">
                  <h1 className="eventsTopTitle">{event.eventName}</h1>
                  <p className="eventsTopDate">
                    {moment(event.eventStarts).format("DD.MM.YYYY")} -{" "}
                    {moment(event.eventStarts).format("HH:mm")}
                  </p>
                </div>
              </div>
            </div>
            <div className="eventsBottom row">
              <button className="col">
                <i className="fas fa-check" />
                Going
              </button>
              <button className="col">
                <i className="fas fa-question" />
                Maybe
              </button>
              <button className="col">
                <i className="fas fa-times" />
                Can't Go
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    event: state.eventReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: async () => dispatch(getAllEvents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsTable);
