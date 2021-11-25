import React from 'react';
import { Container, Breadcrumb, Table, ButtonGroup, Button } from "react-bootstrap";
import AddSecretsModal from '../../components/docs/secrets/add-new-secret-modal';
import PageTitle from '../../components/title'
import './passwords.css'

export default class PasswordsPage extends React.Component {

  state = {
    loading: true,
    company: null
  }

  async componentDidMount() {
    const url = '/api/customer/?id=' + this.props.id
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ company: data, loading: false })
  };

  render() {
    console.log(this.state.company)

    return <>
    <Container>
        <PageTitle title="Secrets" />
        <br />
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/clients">Clients</Breadcrumb.Item>
          <Breadcrumb.Item href="/dashboard">{this.state.company}</Breadcrumb.Item>
          <Breadcrumb.Item active>Secrets</Breadcrumb.Item>
        </Breadcrumb> 
        <h1><b>Secret</b></h1>
        <div className="AlighRight">
          <AddSecretsModal />
        </div>
        

        <br />

        <Table hover responsive size="sm" className="center">
          <thead>
            <tr>
              <th></th>
              <th className="AlighLeft">Application</th>
              <th className="AlighLeft">Secret</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="/radar_dark.svg" alt="logo" width="50" className="passwordsLogo"/>
              </td>
              <td className="AlighLeft">
                <p><b className="passwordsApplicationName">Control Center</b><br />
                admin@controlcenter.com</p>
              </td>
              <td className="AlighLeft">*********</td>
              <td className="width15 AlighRight">
                <ButtonGroup>
                  <Button>Show Secret</Button>
                  <Button>Edit</Button>
                </ButtonGroup>
                
              </td>
            </tr>

            <tr>
              <td>
                <img src="/azure-ad.png" alt="logo" width="50" className="passwordsLogo"/>
              </td>
              <td className="AlighLeft">
                <p><b className="passwordsApplicationName">Azure AAD (Service Desk)</b><br />
                servicedesk@aad.controlcenter.com</p>
              </td>
              <td className="AlighLeft">*********</td>
              <td className="width15 AlighRight">
                <ButtonGroup>
                  <Button>Show Secret</Button>
                  <Button>Edit</Button>
                </ButtonGroup>
              </td>
            </tr>

            <tr>
              <td>
                <img src="/azure-ad.png" alt="logo" width="50" className="passwordsLogo"/>
              </td>
              <td className="AlighLeft">
                <p><b className="passwordsApplicationName">Azure AAD (Operations)</b><br />
                  operations@aad.controlcenter.com</p>
              </td>
              <td className="AlighLeft">*********</td>
              <td className="width15 AlighRight">
                <ButtonGroup>
                  <Button>Show Secret</Button>
                  <Button>Edit</Button>
                </ButtonGroup>
              </td>
            </tr>
          </tbody>
        </Table>
    </Container></>
  }
}
  