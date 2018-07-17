import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'react-materialize';
import './Trip.scss';

@inject ('TripStore')
@observer
class Trip extends Component {
  render(){
    const tripId = this.props.match.params.id;
    const trip = this.props.TripStore.getTrip(tripId);
    return(
      <Row className="Trip">
        <Col l={6} offset='l3'>
          <h3>{trip.name}</h3>
          <img src={trip.img} />
        </Col>
      </Row>
    )
  }
 
}

export default Trip;