import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'react-materialize';
import './Spot.scss';
import BackButton from "./BackButton";

@inject ('SpotStore')
@observer
class Spot extends Component {
  render(){
    const spotId = this.props.match.params.id;
    const spot = this.props.SpotStore.getSpot(spotId);
    return(
      <Row className="Spot">
        <Col l={3}>
          <BackButton/>
        </Col>
        <Col l={10} offset='l1'>
            
          <h3>{spot.name}</h3>
          <img src={spot.img} />
          <p>{spot.desc}</p>
        </Col>
      </Row>
    )
  }
 
}

export default Spot;