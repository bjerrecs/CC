import { Container, Form, Button } from "react-bootstrap";

function NewCustomer() {
    return (
      <Container>
        <Form action="http://localhost:4000/api/customers" method="post">

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Fullname</Form.Label>
                <Form.Control type="text" placeholder="fullname" name="fullname" id="fullname"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="shortname">
                <Form.Label>Shortname</Form.Label>
                <Form.Control type="text" placeholder="shortname" name="shortname" id="shortname"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="device42id">
                <Form.Label>Device42 ID</Form.Label>
                <Form.Control type="text" placeholder="device42id" name="device42id" id="device42id"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="freshdeskid">
                <Form.Label>Freshdesk ID</Form.Label>
                <Form.Control type="text" placeholder="freshdeskid" name="freshdeskid" id="freshdeskid"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="freshdesklink">
                <Form.Label>Freshdesk Link</Form.Label>
                <Form.Control type="text" placeholder="freshdesklink" name="freshdesklink" id="freshdesklink"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="freshdesklink">
                <Form.Label>Service Desk Support Tier</Form.Label>
                    <Form.Select aria-label="Default select example" name="servicedesktier" id="servicedesktier">
                        <option>Open this select menu</option>
                        <option value="t1">Office Hours (7:30-15:30) Only</option>
                        <option value="t2">Office Hours (7:30-15:30) + Optinal Guard</option>
                        <option value="t3">Office Hours (7:30-15:30) + 24/7</option>
                    </Form.Select>
            </Form.Group>
 
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </Container>
    );
  }
  
  export default NewCustomer;
  