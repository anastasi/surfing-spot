import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject ('TripStore')
@observer
class Trip extends Component {
  render(){
    const tripId = this.props.match.params.id;
    const trip = this.props.TripStore.getTrip(tripId);
    return(
      <div>
        <h3>{trip.name}</h3>
        <img src={trip.img} />
      </div>
    )
  }
 
}

export default Trip;