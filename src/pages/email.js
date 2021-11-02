import { Form, Container, Button } from 'react-bootstrap';

function Email() {
  return (
    <Container >

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address (BCC)</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Text id="passwordHelpBlock" muted>
                Multiple recipiants are seperated with commas.
            </Form.Text>
            </Form.Group>
            <Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Select template</option>
                <option value="nchwo">Normal Change (Work Days)</option>
                <option value="nchwe">Normal Change (Weekend Days)</option>
                <option value="ech">Emergency Change</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button> Send Email </Button>
        </Form>

    </Container>
  );
}

export default Email;
