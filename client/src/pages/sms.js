import { Form, Container, Button } from 'react-bootstrap';
import React, { useState} from 'react';
import axios from 'axios';

function Sms() {
    const key = process.env.REACT_APP_TELAVOX_KEY
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
  
    const onTitleChange = e => setTitle(e.target.value);
    const onBodyChange = e => setBody(e.target.value);
  
    const handleSubmit = e => {
      e.preventDefault();
  
    const data = { title, body }; 

    const config = {
        headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyOTQ1OTE2IiwiYXVkIjoiKiIsImlzcyI6InR2eCIsImlhdCI6MTY0MTQ5NzM3NywianRpIjoiMjQ0NjUwIn0.ztpOKeF2DVGRyXj_Ok-hzgL5CetNToznE-_zHyJIlZRGKqPGs1AKMG7rjWIWzz-WP2sgsywaNsB5J3npRHDu0g`
        }
    };
     
    axios.post(
        'https://api.telavox.se/sms/+4551757001?message=hello',
        config
    ).then(console.log).catch(console.log);
    }

  return (
    <Container >
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" value={title} onChange={onTitleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" value={body} onChange={onBodyChange} required/>
            </Form.Group>

            <Button onClick={handleSubmit}>Create Post</Button>

        </Form>
    </Container>
  );
}

export default Sms;
