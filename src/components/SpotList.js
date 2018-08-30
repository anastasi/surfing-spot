import React, { Component } from 'react';
import './SpotList.scss';
import { Link } from "react-router-dom";
import { Row, Col, Card,CardTitle } from 'react-materialize';
import { inject, observer } from 'mobx-react';

@inject('SpotStore')
@observer
class SpotList extends Component {
  render() {
    const { SpotStore } = this.props;
    return(
      <Row className="SpotList">
          {SpotStore.spots.reverse().map((spot,i) => 
            <Col l={6} key={i}>
              <Link to={{ pathname: `/spot/${spot.name}`}}>
                <Card className="small" header={<CardTitle image={spot.img} waves='light'/>}
                  title={spot.name}
                  >
                  <div className="SpotLevelBg">
                    <p className="SpotListLevel">{spot.level}</p>
                  </div>
                </Card>
              </Link>
            </Col>)}
      </Row>
    );
  }
}

  
export default SpotList;