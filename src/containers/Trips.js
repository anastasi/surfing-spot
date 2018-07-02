import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('TripStore')
@observer
class Trips extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.TripStore.addTrip(this.trip.value);
    e.target.reset();
  }

  render() {
    const { TripStore } = this.props;

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            ref={input => (this.trip = input)}
            placeholder="Add a trip"
          />
          <button>Add trip</button>
        </form>
        <h2>You have {TripStore.tripCount} trips</h2>
        <ul>{TripStore.trips.map((trip,i) => <li key={i}>{trip}</li>)}</ul>
      </div>
    )
  }
}

export default Trips;