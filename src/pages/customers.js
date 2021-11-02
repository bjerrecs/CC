import { Container, Form, InputGroup, Breadcrumb } from "react-bootstrap";
import Test from '../get/companies';

function Customers() {

    return (
      <Container>


          <br />

          <h1>Customers</h1>

          <br />

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
  
  export default Customers;
  