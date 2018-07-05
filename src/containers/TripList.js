import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row } from 'react-materialize';
import { inject, observer } from 'mobx-react';

@inject('TripStore')
@observer
class TripList extends Component {
  render() {
    const { TripStore } = this.props;
    return(
      <Row>
        <ul>{TripStore.trips.map((trip,i) => 
          <li key={i}>
            <Link to={{ pathname: `/trip/${trip.name}`}}>
              {trip.name}
              <img src={trip.img}/>
            </Link>
          </li>)}
        </ul>
      </Row>

    );
  }
}

  
export default TripList;