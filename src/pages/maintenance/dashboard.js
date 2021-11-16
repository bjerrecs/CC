import React from "react";
import { Container, Breadcrumb, Table, Button, ButtonGroup } from "react-bootstrap";


function MaintenanceDashboard() {


  return (
      <Container>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
              <Breadcrumb.Item>Maintenance</Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb> 
        <h1><b>Maintenance Dashboard</b></h1>
        <br />

        <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Reason</th>
                    <th>Responseble</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>227457</td>
                    <td>Minor Incident</td>
                    <td>Virtual Layer Issue</td>
                    <td>Simon Bjerre</td>
                    <td>12-11-2021 10:00:00 <br/> 12-11-21 11:00:00</td>
                    <td>Active</td>
                    <td>
                        <ButtonGroup>
                            <Button>Start</Button>
                            <Button>Update</Button>
                            <Button>End</Button>
                        </ButtonGroup>
                    </td>
                </tr>
                <tr>
                    <td>227456</td>
                    <td>Major Incident</td>
                    <td>Virtual Layer Issue</td>
                    <td>Simon Bjerre</td>
                    <td>10-11-2021 10:00:00 <br/> 11-11-21 10:00:00</td>
                    <td>Ended</td>
                    <td>
                        <ButtonGroup>
                            <Button>Archive</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            </tbody>
        </Table>



      </Container>
    );
  }
  
  export default MaintenanceDashboard;
  