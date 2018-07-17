import React, { Component } from 'react';
import './TripList.scss';
import { Link } from "react-router-dom";
import { Row, Col, Card,CardTitle } from 'react-materialize';
import { inject, observer } from 'mobx-react';

@inject('TripStore')
@observer
class TripList extends Component {
  render() {
    const { TripStore } = this.props;
    return(
      <Row className="TripList">
          {TripStore.trips.reverse().map((trip,i) => 
            <Col l={6} key={i}>
              <Link to={{ pathname: `/trip/${trip.name}`}}>
                <Card className="medium" header={<CardTitle image={trip.img} waves='light'/>}
                  title={trip.name}
                  >
                </Card>
              </Link>
            </Col>)}
      </Row>

    );
  }
}

  
export default TripList;