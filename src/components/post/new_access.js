import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'

  export default class NewAccess extends React.Component {

    state = {
      loading: true,
      access: null
    }
  
    async componentDidMount() {
        console.log('prop: ' + this.props.id)
        const url = 'http://localhost:4000/api/client/access/?clientid=' + this.props.id;
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ access: data, loading: false })
    }

    render() {

      if (this.state.loading) {
        return <div> Loading ... </div>
      }

      if (!this.state.access) {
        return <div> No data ... </div>
      }

      return  <Container>
                <Row>
                  <Col></Col>
                  <Col xs={12}>
                    <Table striped bordered hover size="sm" responsive>
                      <thead>
                        <tr>
                          <th>Account Name</th>
                          <th>Description</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.access.map((accessArray) => (
                        <tr>
                          <td>{accessArray.name}</td>
                          <td>{accessArray.description}</td>
                          <td><a target="_blank" href={accessArray.link}>Link</a></td>
                        </tr>
                      ))}
                      </tbody>
                    </Table>
                  </Col>
                  <Col></Col>
                </Row>


              
              </Container>
    }
  }