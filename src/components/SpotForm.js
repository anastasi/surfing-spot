import React, { Component } from 'react';
import '../containers/SpotApp.scss';
import { Input, Row, Col, Button } from 'react-materialize';
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
  constructor() {
    super();
  this.state = {
    selectedFile: null,
    formVisible: false,
    level: ""
  }
}
  change(e){
    const val = e.target.value;
    this.setState({
      level : val
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    
    if(this.spot.value && this.state.selectedFile){
      
      this.props.SpotStore.addSpot({
        name: this.spot.value,
        img: this.state.selectedFile,
        desc: this.desc.value,
        level: this.state.level
      });
      console.log(this.state.level);
      
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
      <Row className="SpotForm">
        <Col l={4} offset="l4" className="SpotFormBg">
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
              <div className="SpotLevel">
              <p>Select level:</p>
                <Input value="beginner"
                       type="radio"
                       name="level"
                       label='Beginner'
                       checked={this.state.level === "Beginner"}
                       onChange={this.change.bind(this)}
                />
                <Input value="intermediate"
                       type="radio"
                       name="level"
                       label='Intermediate'
                       checked={this.state.level === "Intermediate"}
                       onChange={this.change.bind(this)}
                />
                <Input value="advanced"
                       type="radio"
                       name="level"
                       label='Advanced'
                       checked={this.state.level === "Advanced"}
                       onChange={this.change.bind(this)}
                />
              </div>
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
        </Col>
      </Row>
    );
  };
} 

export default Form;