import React from "react";


class DashboardCard extends React.Component {
    render() {
    return <div className="cardBody">
          <p className="cardBodyText">{this.props.text}</p>
          <p className="cardBodyHeader">{this.props.header}</p>
      </div>
    }
  }
  

export default DashboardCard