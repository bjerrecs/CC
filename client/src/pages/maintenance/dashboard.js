import React from "react";
import { Container, Breadcrumb, Table } from "react-bootstrap";
import MaintenanceWindowTable from "../../components/maintenance/windowtable";


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
                    <th>Type</th>
                    <th>Reason</th>
                    <th>Responseble</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <MaintenanceWindowTable />
            </tbody>
        </Table>



      </Container>
    );
  }
  
  export default MaintenanceDashboard;
  