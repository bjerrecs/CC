import { Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import React, {useState} from 'react';

function Email() {
    const [sent, setSent] = useState(false)
    const [text, setText] = useState("")
    const [mailTo, setmailTo] = useState("")

    const handleSend = async() => {
        setSent(true)
        try {
            await axios.post("http://localhost:4000/api/send_mail/maintenance", {
                text,mailTo
            })
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <Container >
        {!sent ? (
            <Form onSubmit={handleSend}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" value={text} onChange={(e)   => setText(e.target.value)} 
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="text" value={mailTo} onChange={(e)   => setmailTo(e.target.value)} 
                    />
                </Form.Group>
                <Button type="submit"> Send Email </Button>
            </Form>
        ):(
            <h1>Email Sent</h1>
        )}



    </Container>
  );
}

export default Email;
