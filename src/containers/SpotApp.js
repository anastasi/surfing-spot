import React, { Component } from 'react';
import SpotList from './SpotList';
import './SpotApp.scss';
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

@inject('SpotStore')
@observer
class SpotApp extends Component {
  state = {
    selectedFile: null,
    formVisible: false
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.spot.value && this.state.selectedFile){
      this.props.SpotStore.addSpot({
        name: this.spot.value,
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
    }
    return (
      <div className="SpotApp">
        <Row>
            <h1 className="SpotFormTitle">Add your new Spot!</h1>
            <Button onClick={this.formVisibleHandler} floating large className='red' waves='light' icon='add' />
        </Row>
        <Row className="SpotForm">
          <Col l={4} offset="l4" className="SpotFormBg">
            {output}
          </Col>
        </Row>
        <Row>
          <SpotList/>
        </Row>
      </div>
    )
  }
}

export default SpotApp;