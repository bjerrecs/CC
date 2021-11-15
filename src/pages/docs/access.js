import React from 'react';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';

  export default class AccessPage extends React.Component {

    state = {
      loading: true,
      access: null
    }
  
    async componentDidMount() {
        const url = 'http://localhost:4000/api/client/access/?clientid=' + this.props.id;
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
                    <Table striped bordered hover size="md" responsive>
                      <thead>
                        <tr>
                          <th>Account Name</th>
                          <th>Description</th>
                          <th>Link</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                      {this.state.access.map((accessArray) => (
                        <tr>
                          <td><b>{accessArray.name}</b></td>
                          <td>{accessArray.description}</td>
                          <td><a target="_blank" rel="noreferrer" href={accessArray.link}>Link</a></td>
                          <td><Button variant="dark">Edit</Button></td>
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