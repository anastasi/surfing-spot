import React, { Component } from 'react';
import SpotList from '../components/SpotList';
import SpotForm from '../components/SpotForm';
import './SpotApp.scss';
import { Row, Button } from 'react-materialize';
import { inject, observer } from 'mobx-react';


@inject('SpotStore')
@observer
class SpotApp extends Component {
  state = {
    formVisible: false
  }
  formVisibleHandler = e => {
    this.setState({
      formVisible: !this.state.formVisible
    })
  }

  render() {
    let output = null;
    if(this.state.formVisible){
      output = (<SpotForm />
      );
    }
    return (
      <div className="SpotApp">
        <Row>
            <h1 className="SpotFormTitle">Add your new Spot!</h1>
            <Button onClick={this.formVisibleHandler} floating large className='red' waves='light' icon='add' />
        </Row>
            {output}
        <Row>
          <SpotList/>
        </Row>
      </div>
    )
  }
}

export default SpotApp;