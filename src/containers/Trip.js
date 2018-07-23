import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'react-materialize';
import './Trip.scss';
import BackButton from "./BackButton";

@inject ('TripStore')
@observer
class Trip extends Component {
  render(){
    const tripId = this.props.match.params.id;
    const trip = this.props.TripStore.getTrip(tripId);
    return(
      <Row className="Trip">
        <Col l={3}>
          <BackButton/>
        </Col>
        <Col l={10} offset='l1'>
            
          <h3>{trip.name}</h3>
          <img src={trip.img} />
          <p>{trip.desc}</p>
        </Col>
      </Row>
    )
  }
 
}

export default Trip;