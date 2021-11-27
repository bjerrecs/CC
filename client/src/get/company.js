import React from 'react';
import { Badge , ListGroup, Breadcrumb } from 'react-bootstrap';
import PageHeader from '../components/pageheader'
export default class FetchCompany extends React.Component {

  state = {
    loading: true,
    company: null,
    access: null,
    count: 0,
    id: this.props.id
  }

  async componentDidMount() {
      const url = '/api/customer/?id=' + this.props.id
      const accessApi = '/api/client/access/?id=' + this.props.id
      const response = await fetch(url);
      const responseAccessApi = await fetch(accessApi);
      const data = await response.json();
      const dataAccessApi = await responseAccessApi.json();
      this.setState({ company: data, access: dataAccessApi, loading: false })
      document.title = 'Control Center | ' + this.state.company.fullname; 
  }


  render() {

    if (this.state.loading) {
        return <div> Loading ... </div>
    }

    if (!this.state.company.fullname) {
      return <div> No data ... </div>
    }
    
    var Tier1 = "t1"
    var Tier2 = "t2"
    var Tier3 = "t3"

    if (this.state.company.servicedesktier === Tier1 ){
        var ServiceDeskLevel = "Office Hours (7:30-15:30) Only"
    }
    if (this.state.company.servicedesktier === Tier2 ){
      ServiceDeskLevel = "Office Hours (7:30-15:30) + Optinal Guard"
    }
    if (this.state.company.servicedesktier === Tier3 ){
      ServiceDeskLevel = "Office Hours (7:30-15:30) + 24/7"
    } 
    if (this.state.company.servicedesktier){
      ServiceDeskLevel = "No SD defined"
    }


    return  <div>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/clients">
                Clients
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                {this.state.company.fullname}
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Process Information</Breadcrumb.Item>
            </Breadcrumb>

            <PageHeader h1={this.state.company.fullname} h3={'Support:' + ServiceDeskLevel}/>

              <ListGroup as="ol" numbered>
              <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold"><a className="a-dark" href={'/client/access/' + this.props.id }>Access</a></div>
                      Documents how to access customer enviorment
                  </div>
                  <Badge variant="primary" pill>
                  {this.state.access.map((accessArray) => (
                    this.state.count + 1
                  ))}
                  {this.state.count}
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold"><a className="a-dark" href={'/client/applications/' + this.props.id }>Application</a></div>
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
                    <div className="fw-bold"><a className="a-dark" href={'/client/um/' + this.props.id }>User-Management</a></div>
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
                    <div className="fw-bold"><a className="a-dark" href={'/client/shares/' + this.props.id }>Shares</a></div>
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
                    <div className="fw-bold"><a className="a-dark" href={'/client/licens/' + this.props.id }>Licens</a></div>
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
                    <div className="fw-bold"><a className="a-dark" href={'/client/secrets/' + this.props.id }>Passwords</a></div>
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