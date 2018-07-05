import React, { Component } from 'react';
import TripList from './TripList';
import './TripForm.scss';
import { Row, Button } from 'react-materialize';
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
class TripForm extends Component {
  state = {
    selectedFile: null
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.TripStore.addTrip({
      name: this.trip.value,
      img: this.state.selectedFile
    });
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

  render() {
    return (
      <Row>
        <form onSubmit={e => this.handleSubmit(e)} className="TripForm">
          <input
            type="text"
            ref={input => (this.trip = input)}
            placeholder="Add a trip"
          />
          <input 
            type="file" 
            onChange={this.fileChangedHandler}
            ref={input => (this.img = input)}
          />
          <Button waves='light'>Add trip</Button>
        </form>
          <TripList/>
        </Row>
    )
  }
}

export default TripForm;