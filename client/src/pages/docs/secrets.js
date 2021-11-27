import axios from 'axios';
import React, { useState, useEffect   } from 'react';
import { useParams } from 'react-router-dom';
import AddSecretsModal from '../../components/docs/secrets/add-new-secret-modal';
import PageTitle from '../../components/title'
import {ButtonGroup, Button, Table, Container, Breadcrumb} from 'react-bootstrap'

function SecretsPage() {
    const { id } = useParams();
    const [secrets, setSecrets] = useState([]);

    const getSecrets = () => {
      axios.get('/api/secrets/')
      .then((response) => {
          const secrets = response.data
          setSecrets(secrets);
      });
    };

    useEffect(() => getSecrets(), [])
    return (
      <>
          <Container>
        <PageTitle title="Secrets" />
        <br />
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/clients">Clients</Breadcrumb.Item>
          <Breadcrumb.Item href="/dashboard"></Breadcrumb.Item>
          <Breadcrumb.Item active>Secrets</Breadcrumb.Item>
        </Breadcrumb> 
        <h1><b>Secret</b></h1>
        <div className="AlighRight">
          <AddSecretsModal id={id} />
        </div>

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
              {secrets.map((secrets) => (
                <tr>
                  <td>
                    <img src="/azure-ad.png" alt="logo" width="50" className="passwordsLogo"/>
                  </td>
                  <td className="AlighLeft">
                    <p><b className="passwordsApplicationName">{secrets.title}</b><br />
                      {secrets.username}</p>
                  </td>
                  <td className="AlighLeft">{secrets.password}</td>
                  <td className="width15 AlighRight">
                    <ButtonGroup>
                      <Button>Show Secret</Button>
                      <Button>Edit</Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
        </Table>
        </Container>
      </>
    );
  }
  
  export default SecretsPage;
  