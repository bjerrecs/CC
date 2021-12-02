import { Form, Container, Button, Breadcrumb, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import React, {useState} from 'react';
import PageHeader from '../components/pageheader'

function Patch() {
    const [sent, setSent] = useState(false)
    const [mailTo, setmailTo] = useState("")
    const [saturdaystartdate, setsaturdaystartdate] = useState("")
    const [saturdaystarttime, setsaturdaystarttime] = useState("")
    const [saturdayenddate, setsaturdayenddate] = useState("")
    const [saturdayendtime, setsaturdayendtime] = useState("")
    const [sundaystartdate, setsundaystartdate] = useState("")
    const [sundaystarttime, setsundaystarttime] = useState("")
    const [sundayenddate, setsundayenddate] = useState("")
    const [sundayendtime, setsundayendtime] = useState("")

    const handleSend = async() => {
        setSent(true)
        try {
            await axios.post("/api/send_mail/patch", {
                mailTo,
                saturdaystartdate,
                saturdaystarttime,
                saturdayenddate,
                saturdayendtime,
                sundaystartdate,
                sundaystarttime,
                sundayenddate,
                sundayendtime
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



  return (
    <Container >
            <br />
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Patch Email</Breadcrumb.Item>
            </Breadcrumb>

            <PageHeader h1="Email Customers" h3="Maintenance Template"/>
        {!sent ? (
            <Form onSubmit={handleSend}>

                <br />
                <hr />
                <br />

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Recipients</Form.Label>
                    <FloatingLabel label="name@email.com">
                        <Form.Control type="text" value={mailTo} onChange={(e)   => setmailTo(e.target.value)} required/>
                        <Form.Text className="text-muted">
                        For multiple recipients, use comma seperation
                        </Form.Text>
                    </FloatingLabel>
                </Form.Group>

                <br />
                <hr />
                <br />

                <Form.Label>Saturday</Form.Label>
                <Form.Group className="mb-3">
                    <FloatingLabel label="Start Date">
                        <Form.Control type="date" value={saturdaystartdate} onChange={(e)   => setsaturdaystartdate(e.target.value)} required />
                    </FloatingLabel>
                    <FloatingLabel label="Start Time">
                        <Form.Control type="time" value={saturdaystarttime} onChange={(e)   => setsaturdaystarttime(e.target.value)} required />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FloatingLabel label="End Date">
                        <Form.Control type="date" value={saturdayenddate} onChange={(e)   => setsaturdayenddate(e.target.value)} required />
                    </FloatingLabel>
                    <FloatingLabel label="End Time">
                        <Form.Control type="time" value={saturdayendtime} onChange={(e)   => setsaturdayendtime(e.target.value)} required />
                    </FloatingLabel>
                </Form.Group>

                <br />
                <hr />
                <br />

                <Form.Label>Sunday</Form.Label>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FloatingLabel label="Start Date">
                        <Form.Control type="date" value={sundaystartdate} onChange={(e)   => setsundaystartdate(e.target.value)} required />
                    </FloatingLabel>
                    <FloatingLabel label="Start Time">
                        <Form.Control type="time" value={sundaystarttime} onChange={(e)   => setsundaystarttime(e.target.value)} required />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <FloatingLabel label="End Date">
                        <Form.Control type="date" value={sundayenddate} onChange={(e)   => setsundayenddate(e.target.value)} required />
                    </FloatingLabel>
                    <FloatingLabel label="End Time">
                        <Form.Control type="time" value={sundayendtime} onChange={(e)   => setsundayendtime(e.target.value)} required />
                    </FloatingLabel>
                </Form.Group>

                <br />
                <hr />
                <br />

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

export default Patch;
