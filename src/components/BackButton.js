import React from "react";
import "./BackButton.scss"; 
import { Icon } from 'react-materialize';

class BackButton extends React.Component {
  static contextTypes = {
    router: () => true,
  }

  render() {
    return (
      <a
        waves='purple'
        className="BackButton"
        onClick={this.context.router.history.goBack}>
           <Icon small>keyboard_arrow_left</Icon><span className="BackBtnText">Back</span>
      </a>
     
    )
  }
}

export default BackButton;