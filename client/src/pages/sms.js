import { Form, Container, Button } from 'react-bootstrap';
import React, { useState} from 'react';
import axios from 'axios';
import PageHeader from '../components/pageheader'
import CCBreadcrumb from '../Breadcrumb'

function Sms() {
    const  [phone, setTitle] = useState("");
    const  [password, setBody] = useState("");
  
    const onTitleChange = e => setTitle(e.target.value);
    const onBodyChange = e => setBody(e.target.value);
  
    const handleSubmit = e => {
    e.preventDefault();
    const data = { phone,   password }; 
    console.log(data)

    axios.post('/api/sms', {
        phone,
        password
    }).then(
        console.log
    )
    .catch(
        console.log
    );

    }

  return (
    <Container >
            <CCBreadcrumb item0="Home" active="SMS"/>
            <PageHeader h1="Password SMS" h3="send password via SMS to DK users"/>
            <br />

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" value={phone} onChange={onTitleChange} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" value={password} onChange={onBodyChange} required/>
            </Form.Group>

            <Button onClick={handleSubmit}>Create Post</Button>

        </Form>
    </Container>
  );
}

export default Sms;
