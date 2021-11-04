import { Container, Form, InputGroup, Breadcrumb } from "react-bootstrap";
import Test from '../../get/companies';
import PageHeader from '../../components/pageheader'

function ClientModify() {

    return (
      <Container>
        
          <br />

            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/clients">
                Clients
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Modify</Breadcrumb.Item>
            </Breadcrumb>

          <PageHeader h1="Modify Clients" h3=""/>



      </Container>
    );
  }
  
  export default ClientModify;
  