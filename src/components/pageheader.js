import React from "react";

class PageHeader extends React.Component {
    render() {
    return  <div>
                <h1><b>{this.props.h1}</b></h1>
                <h3>{this.props.h3}</h3>
                <br />
            </div>
    }
  }
  

export default PageHeader