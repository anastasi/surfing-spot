import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'react-materialize';
import './Spot.scss';
import BackButton from "../components/BackButton";

@inject ('SpotStore')
@observer
class Spot extends Component {
  render(){
    const spotId = this.props.match.params.id;
    const spot = this.props.SpotStore.getSpot(spotId);
    return(
      <Row className="Spot">
        <div className="container">
          <Col l={12}>
            <BackButton/>
          </Col>
          <Col l={6}>
            <img src={spot.img} />
          </Col>
          <Col l={6}>
            <h3>{spot.name}</h3>
            <p className="SpotLevel">{spot.level}</p>
            <p>{spot.desc}</p>
          </Col>
        </div>
      </Row>
    )
  }
 
}

export default Spot;