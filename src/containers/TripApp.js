import React, { Component } from 'react';
import TripList from './TripList';
import './TripApp.scss';
import { Row, Col, Button } from 'react-materialize';
import { inject, observer } from 'mobx-react';


const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

@inject('TripStore')
@observer
class TripApp extends Component {
  state = {
    selectedFile: null,
    formVisible: false
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.trip.value && this.state.selectedFile){
      this.props.TripStore.addTrip({
        name: this.trip.value,
        img: this.state.selectedFile,
        desc: this.state.value
      });
    } else{
      
    }
    e.target.reset();
  }

  fileChangedHandler = e => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      this.setState({
        selectedFile: base64
      })
      console.debug("file stored",base64);
    });
  }
  formVisibleHandler = e => {
    this.setState({
      formVisible: !this.state.formVisible
    })
  }

  render() {
    let output = null;
    
    if(this.state.formVisible){
      output = (
        <form onSubmit={e => this.handleSubmit(e)}>
          <Col l={12} m={12} s={12}>
            <input
              type="text"
              ref={input => (this.trip = input)}
              placeholder="Add a trip"
            />
          </Col>
          <Col l={12} m={12} s={12}>
            <textarea
              ref={input => (this.desc = input)}
              placeholder="Add a description"
            ></textarea>
          </Col>
          <Col l={12} m={12} s={12}>
            <label className="FileContainer">
              Choose a trip image
              <input 
                type="file" 
                onChange={this.fileChangedHandler}
                ref={input => (this.img = input)}
              />
            </label>
          </Col>
          <Col l={12} m={12} s={12}>
            <Button waves='light' className="TripAddBtn">Add trip</Button>
          </Col>
        </form>
      );
    }
    return (
      <div className="TripApp">
        <Row>
            <h1 className="TripFormTitle">Add your new Trip!</h1>
            <Button onClick={this.formVisibleHandler} floating large className='red' waves='light' icon='add' />
        </Row>
        <Row className="TripForm">
          <Col l={4} offset="l4" className="TripFormBg">
            {output}
          </Col>
        </Row>
        <Row>
          <TripList/>
        </Row>
      </div>
    )
  }
}

export default TripApp;