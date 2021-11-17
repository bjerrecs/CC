import { Container, Form, InputGroup, Breadcrumb } from "react-bootstrap";
import Test from '../../get/companies';
import PageHeader from '../../components/pageheader'

function Clients() {

    return (
      <Container>
        
          <br />

            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Clients</Breadcrumb.Item>
            </Breadcrumb>

          <PageHeader h1="Clients" h3=""/>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup className="mb-2">
                    <br />
                    <Form.Control type="text" className="txtaligncenter" placeholder="Search Customers"/>
                </InputGroup>
            </Form.Group>
            </Form>

            <div>
              <Test />
            </div>

      </Container>
    );
  }
  
  export default Clients;
  