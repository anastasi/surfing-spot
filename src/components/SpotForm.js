import React, { Component } from 'react';
import '../containers/SpotApp.scss';
import { Col, Button } from 'react-materialize';
import { inject, observer } from 'mobx-react';


const getBase64 = (file) => {
  return new Promise((resolve,reject) => {
     const reader = new FileReader();
     reader.onload = () => resolve(reader.result);
     reader.onerror = error => reject(error);
     reader.readAsDataURL(file);
  });
}

@inject('SpotStore')
@observer
class Form extends Component {
  state = {
    selectedFile: null,
    formVisible: false
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.spot.value && this.state.selectedFile){
      this.props.SpotStore.addSpot({
        name: this.spot.value,
        img: this.state.selectedFile,
        desc: this.desc.value
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
    });
  }
  
  render(){
    return(
        <form onSubmit={e => this.handleSubmit(e)}>
          <Col l={12} m={12} s={12}>
            <input
              type="text"
              ref={input => (this.spot = input)}
              placeholder="Add a spot"
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
              Choose a spot image
              <input 
                type="file" 
                onChange={this.fileChangedHandler}
                ref={input => (this.img = input)}
              />
            </label>
          </Col>
          <Col l={12} m={12} s={12}>
            <Button waves='light' className="SpotAddBtn">Add spot</Button>
          </Col>
        </form>
    );
  };
} 

export default Form;