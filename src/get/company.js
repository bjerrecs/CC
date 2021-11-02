import React from 'react';
import { Badge , ListGroup, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class FetchCompany extends React.Component {

  state = {
    loading: true,
    company: null
  }
  

  async componentDidMount() {
      console.log('prop: ' + this.props.id)
      const url = 'http://localhost:4000/api/customer/?id=' + this.props.id
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ company: data, loading: false })
  }

  render() {

    if (this.state.loading) {
        return <div> Loading ... </div>
    }

    if (!this.state.company.fullname) {
      return <div> No data ... </div>
    }

    

    if (this.state.company.servicedesktier = "t1"){
        var ServiceDeskLevel = "Office Hours (7:30-15:30) Only"
    }
    if (this.state.company.servicedesktier = "t2"){
      var ServiceDeskLevel = "Office Hours (7:30-15:30) + Optinal Guard"
    }
    if (this.state.company.servicedesktier = "t3"){
      var ServiceDeskLevel = "Office Hours (7:30-15:30) + 24/7"
    } 
    if (this.state.company.servicedesktier){
      var ServiceDeskLevel = "No SD defined"
    }


    return  <div>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/customers">
                Client
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{this.state.company.fullname}</Breadcrumb.Item>
            </Breadcrumb>

              <h2><b>{this.state.company.fullname}</b><br /><h4>Support: {ServiceDeskLevel}</h4></h2>

              <br />

              <ListGroup as="ol" numbered>
              <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold"><Link to={'/customer/' + this.props.id + '/access'} className="darkA">Access</Link></div>
                      Documents how to access customer enviorment
                  </div>
                  <Badge variant="primary" pill>
                    XX
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Application</div>
                      Documents how to manage customer applications
                  </div>
                  <Badge variant="primary" pill>
                    XX
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">User-Management</div>
                      Documents user life cycle
                  </div>
                  <Badge variant="primary" pill>
                    XX
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Shares</div>
                      Documents user shares & mapped drives
                  </div>
                  <Badge variant="primary" pill>
                    XX
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Licens</div>
                      Documents customers licenses
                  </div>
                  <Badge variant="primary" pill>
                    XX
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Passwords</div>
                      Documents shared passwords and service accounts
                  </div>
                  <Badge variant="primary" pill>
                    XX
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </div>

  }
}