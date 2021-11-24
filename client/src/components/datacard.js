
import React from "react";
import './datacard.css'

class Datacard extends React.Component {
    render() {
    return <div className="DatacardContainer">
          <p className="DatacardTitle">{this.props.title}</p>
          <p className="DatacardSubTitle">{this.props.subtitle}</p>
          <span>{this.props.component}</span>
      </div>
    }
  }
  

export default Datacard