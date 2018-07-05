import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject('TripStore')
@observer
class TripList extends Component {
  render() {
    const { TripStore } = this.props;
    return(
      <ul>{TripStore.trips.map((trip,i) => 
        <li key={i}>
          <Link to={{ pathname: `/trip/${trip.name}`}}>{trip.name}
            <img src={trip.img}/>
          </Link>
        </li>)}
      </ul>
    );
  }
}

  
export default TripList;