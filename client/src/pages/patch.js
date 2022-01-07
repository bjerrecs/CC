import { Form, Container, Button, FloatingLabel, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import React, {useState} from 'react';
import PageHeader from '../components/pageheader'
import CCBreadcrumb from '../Breadcrumb'

function Patch() {
    const [sent, setSent] = useState(false)
    const [mailTo, setmailTo] = useState("")

    const [DayOneDate, setDayOneDate] = useState("")
    const [DayOneStartTime, setDayOneStartTime] = useState("")
    const [DayOneEndTime, setDayOneEndTime] = useState("")

    const [DayTwoDate, setDayTwoDate] = useState("")
    const [DayTwoStartTime, setDayTwoStartTime] = useState("")
    const [DayTwoEndTime, setDayTwoEndTime] = useState("")

    const handleSend = async() => {
        setSent(true)
        try {
            await axios.post("/api/send_mail/patch", {
                mailTo,
                DayOneDate,
                DayOneStartTime,
                DayOneEndTime,
                DayTwoDate,
                DayTwoStartTime,
                DayTwoEndTime
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
            <CCBreadcrumb item0="Home" active="Patch Management Email"/>
            <div className="CustomPageBackground">
                <PageHeader h1="Patch Infromation" h3="Maintenance Template"/>
            </div>
            
        {!sent ? (
            <Form onSubmit={handleSend}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>
                            Recipients (BCC)
                        </Form.Label>
                        <Form.Control type="text" value={mailTo} onChange={(e)   => setmailTo(e.target.value)} required/>
                        <Form.Text className="text-muted">
                        For multiple recipients, use comma seperation 
                        </Form.Text>
                    </Form.Group>
                </Row>

                <Row className="mb-3">


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Day One</Form.Label>
                        <Form.Control type="date" value={DayOneDate} onChange={(e)   => setDayOneDate(e.target.value)} />
                        <br />
                        <Form.Control type="time" value={DayOneStartTime} onChange={(e)   => setDayOneStartTime(e.target.value)} />
                        <Form.Control type="time" value={DayOneEndTime} onChange={(e)   => setDayOneEndTime(e.target.value)} />
                        <br />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Day One</Form.Label>
                        <Form.Control type="date" value={DayTwoDate} onChange={(e)   => setDayTwoDate(e.target.value)} />
                        <br />
                        <Form.Control type="time" value={DayTwoStartTime} onChange={(e)   => setDayTwoStartTime(e.target.value)} />
                        <Form.Control type="time" value={DayTwoEndTime} onChange={(e)   => setDayTwoEndTime(e.target.value)} />
                        <br />
                    </Form.Group>


                </Row>

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
