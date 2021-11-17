import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";


function MaintenanceShedule() {

<<<<<<< HEAD:client/src/pages/maintenance/schedule.js
  const [sent, setSent] = useState(false)
  const [reason, setReason] = useState("")
  const [type, setType] = useState("")
  const [internal, setInternal] = useState("")
  const [startdate, setStartdate] = useState("")
  const [enddate, setEnddate] = useState("")
  const [starttime, setStarttime] = useState("")
  const [endtime, setEndtime] = useState("")

  const handleSend = async() => {
      setSent(true)
      try {
          await axios.post("/api/maintenance/schedule", {
            reason,
            type,
            internal,
            startdate,
            enddate,
            starttime,
            endtime
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

=======
>>>>>>> parent of 9ea8187 (changes):src/pages/maintenance/schedule.js

  return (
      <Container>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
              <Breadcrumb.Item>Maintenance</Breadcrumb.Item>
              <Breadcrumb.Item active>Shedule</Breadcrumb.Item>
            </Breadcrumb> 
        <h1><b>Maintenance Shedule</b></h1>
        <br />

<<<<<<< HEAD:client/src/pages/maintenance/schedule.js
        <Form onSubmit={handleSend}>

            <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                    <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
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
                <Form.Control type="text" placeholder="Why is there a Maintenance Window" id="reason" value={reason} onChange={(e) => setReason(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Internal Responsible</Form.Label>
                <Form.Control type="text" placeholder="Who is Incident Manager?" id="internal" value={internal} onChange={(e) => setInternal(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="What day starts the maintenance window" id="startdate" value={startdate} onChange={(e) => setStartdate(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>Start Time</Form.Label>
                <Form.Control type="time" placeholder="What time starts the maintenance window" id="starttime" value={starttime} onChange={(e) => setStarttime(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>End Time</Form.Label>
                <Form.Control type="time" placeholder="What time ends the maintenance window" id="endtime" value={endtime} onChange={(e) => setEndtime(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullname">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" placeholder="What day ends the maintenance window" id="enddate" value={enddate} onChange={(e) => setEnddate(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
=======
>>>>>>> parent of 9ea8187 (changes):src/pages/maintenance/schedule.js


      </Container>
    );
  }
  
  export default MaintenanceShedule;
  