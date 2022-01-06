import React from "react";
import './dashboard.css'

import { Row, Col, Breadcrumb } from "react-bootstrap";
import PageTitle from "../../components/title";
import Datacard from "../../components/datacard";
import DatacardTable from "../../components/dashboard/datacard-table-warehouse";
import DatacardTableMaintenance from "../../components/dashboard/datacard-table-maintenance";


function Dashboard() {

  return (
      <>
        <PageTitle title="Dashboard"/>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb> 
            
            <h1><b>Dashboard</b></h1>
            
            <br />

            <Row>
              <Col className="flexCenter">
                <Datacard title="Upcomming Maintenance" subtitle="" component={<DatacardTableMaintenance />}/>
              </Col>

              <Col className="flexCenter">
                <Datacard title="Latest Warehouse Items" subtitle="" component={<DatacardTable />}/>
              </Col>
            </Row>

      </>
    );
  }
  
  export default Dashboard;
  