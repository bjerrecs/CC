import React from "react";
import './card.css'

class DashboardCard1 extends React.Component {
    render() {
    return <>
        <div className="cardWrap">
            <p className="cardTitle">{this.props.title}</p>
            <p className="cardContent">{this.props.content}</p>
        </div>
      </>
    }
  }
  

export default DashboardCard1