import React from "react";

class PageTitle extends React.Component {

    componentDidMount() {
        document.title = 'Control Center | ' + this.props.title; 
    }

    render() {
    return  <></>
    }
  }
  

export default PageTitle

