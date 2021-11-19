import { Form, Container, Button, Breadcrumb } from 'react-bootstrap';
import axios from 'axios';
import React, {useState} from 'react';
import PageHeader from '../components/pageheader'

function Sms() {
    const key = process.env.REACT_APP_TELAVOX_KEY
    const [sent, setSent] = useState(false)
    const [phonenumber, setPhonenumber] = useState("")
    const [message, setMessage] = useState("")

    const handleSend = async() => {
        setSent(true)
        let config = {
            headers: {
              'Authorization': 'Bearer ' + key,
              'Access-Control-Allow-Origin': '*'
            }
          }
        try {
            await axios.post('https://api.telavox.se/sms/' + phonenumber + '?message=' + message, {

            },config)
        } catch (error) {
            console.log(error)
        }
    }

    /*if (sent) {
        setTimeout(function(){
            window.location.reload(false);
        }, 1500); 
        // 1.5 sec delay before page reload

    }*/



  return (
    <Container >
            <br />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Maintenance Email</Breadcrumb.Item>
            </Breadcrumb>

            <PageHeader h1="SMS" h3="New Password Template"/>
        {!sent ? (
            <Form onSubmit={handleSend}>

                <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" value={phonenumber} onChange={(e)   => setPhonenumber(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text"   value={message} onChange={(e)   => setMessage(e.target.value)} required />
                </Form.Group>

                <Button type="submit"> Send SMS </Button>
            </Form>
        ):(
            <div>
            <h1>Email Sent</h1>
            </div>
        )}



    </Container>
  );
}

export default Sms;
