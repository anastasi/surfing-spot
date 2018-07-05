import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";

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
class Trips extends Component {
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
    const { TripStore } = this.props;
    console.log(TripStore);
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
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

          <button>Add trip</button>
          
        </form>

        <h2>You have {TripStore.tripCount} trips</h2>
        <ul>{TripStore.trips.map((trip,i) => <li key={i}>
          <Link to={{ pathname: `/trip/${trip.name}`}}>{trip.name}
            <img src={trip.img}/>
          </Link></li>)}</ul>
      </div>
    )
  }
}

export default Trips;