import React from 'react';
import './SpotApp.scss';
import { Col, Button } from 'react-materialize';

const form = (props) => (
  <form onSubmit={e => props.handleSubmit(e)}>
    <Col l={12} m={12} s={12}>
      <input
        type="text"
        ref={input => (props.spot = input)}
        placeholder="Add a spot"
      />
    </Col>
    <Col l={12} m={12} s={12}>
      <textarea
        ref={input => (props.desc = input)}
        placeholder="Add a description"
      ></textarea>
    </Col>
    <Col l={12} m={12} s={12}>
      <label className="FileContainer">
        Choose a spot image
        <input 
          type="file" 
          onChange={props.fileChangedHandler}
          ref={input => (props.img = input)}
        />
      </label>
    </Col>
    <Col l={12} m={12} s={12}>
      <Button waves='light' className="SpotAddBtn">Add spot</Button>
    </Col>
  </form>
);


export default form;