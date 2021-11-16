import axios from "axios";
import React, { useState } from "react";
import { Container, Breadcrumb, Form, Button } from "react-bootstrap";


function MaintenanceShedule() {

  const [sent, setSent] = useState(false)
  const [reason, setReason] = useState("")
  const [maintenanceReason, setmaintenanceReason] = useState("")
  const [maintenanceStartDate, setmaintenanceStartDate] = useState("")
  const [maintenanceStartTime, setmaintenanceStartTime] = useState("")
  const [maintenanceEndDate, setmaintenanceEndDate] = useState("")
  const [maintenanceEndTime, setmaintenanceEndTime] = useState("")

  const handleSend = async() => {
      setSent(true)
      try {
          await axios.post("http://localhost:4000/api/send_mail/maintenance", {

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
      <Container>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
              <Breadcrumb.Item>Maintenance</Breadcrumb.Item>
              <Breadcrumb.Item active>Shedule</Breadcrumb.Item>
            </Breadcrumb> 
        <h1><b>Shedule Maintenance</b></h1>
        <br />

        <Form>

            <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                    <Form.Select name="type" id="type">
                        <option>Open this select menu</option>
                        <option value="gencha">General Change</option>
                        <option value="majcha">Major Change</option>
                        <option value="gn">General Maintenance</option>
                        <option value="mininc">Minor Incident</option>
                        <option value="majinc">Major Incident</option>
                    </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Reason</Form.Label>
                <Form.Control type="text" placeholder="Why is there a Maintenance Window" value={reason} onChange={(e)   => setReason(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Internal Responsible</Form.Label>
                <Form.Control type="text" placeholder="Who is Incident Manager?" name="responseble" id="responseble"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="What day starts the maintenance window" name="startdate" id="startdate"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="time" placeholder="What time starts the maintenance window" name="starttime" id="starttime"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>End Time</Form.Label>
                <Form.Control type="time" placeholder="What time ends the maintenance window" name="endtime" id="endtime"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="What day ends the maintenance window" name="enddate" id="enddate"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>


      </Container>
    );
  }
  
  export default MaintenanceShedule;
  