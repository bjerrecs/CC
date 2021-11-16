import React from "react";
import { Container, Breadcrumb } from "react-bootstrap";


function MaintenanceShedule() {


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



      </Container>
    );
  }
  
  export default MaintenanceShedule;
  