
import React from "react";
import popover from 'react-bootstrap'
import { GoInfo } from "react-icons/go";
import './datacard.css'
class Datacard extends React.Component {

  

  
    render() {
    return <div className="DatacardContainer">
            <b className="DatacardTitle">
              {this.props.title} 
            </b>
            <p className="DatacardSubTitle">
              {this.props.subtitle}
            </p>
          <span>{this.props.component}</span>
      </div>
    }
  }
  

export default Datacard