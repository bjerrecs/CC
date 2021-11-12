import { Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import React, {useState} from 'react';

function Email() {
    const [sent, setSent] = useState(false)
    const [mailTo, setmailTo] = useState("")
    const [maintenanceReason, setmaintenanceReason] = useState("")
    const [maintenanceStartDate, setmaintenanceStartDate] = useState("")
    const [maintenanceStartTime, setmaintenanceStartTime] = useState("")
    const [maintenanceEndDate, setmaintenanceEndDate] = useState("")
    const [maintenanceEndTime, setmaintenanceEndTime] = useState("")

    const handleSend = async() => {
        setSent(true)
        try {
            await axios.post("http://localhost:4000/api/send_mail/maintenance", {
                mailTo,
                maintenanceReason,
                maintenanceStartDate,
                maintenanceStartTime,
                maintenanceEndDate,
                maintenanceEndTime
            })
        } catch (error) {
            console.log(error)
        }
    }

    if (sent) {
        setTimeout(function(){
            window.location.reload(false);
        }, 1500); 
        // 1.5 sec delay before page reload

    }

    // Form Validation

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };


  return (
    <Container >
        {!sent ? (
            <Form onSubmit={handleSend}>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Recipients</Form.Label>
                    <Form.Control type="text" value={mailTo} onChange={(e)   => setmailTo(e.target.value)} required/>
                    <Form.Text className="text-muted">
                    For multiple recipients, use comma seperation
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Reason for change activity</Form.Label>
                    <Form.Control type="text" value={maintenanceReason} onChange={(e)   => setmaintenanceReason(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Start</Form.Label>
                    <Form.Control type="date" value={maintenanceStartDate} onChange={(e)   => setmaintenanceStartDate(e.target.value)} required />
                    <Form.Control type="time" value={maintenanceStartTime} onChange={(e)   => setmaintenanceStartTime(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>End</Form.Label>
                    <Form.Control type="date" value={maintenanceEndDate} onChange={(e)   => setmaintenanceEndDate(e.target.value)} required />
                    <Form.Control type="time" value={maintenanceEndTime} onChange={(e)   => setmaintenanceEndTime(e.target.value)} required />
                </Form.Group>
                <Button type="submit"> Send Email </Button>
            </Form>
        ):(
            <div>
            <h1>Email Sent</h1>
            </div>
        )}



    </Container>
  );
}

export default Email;
