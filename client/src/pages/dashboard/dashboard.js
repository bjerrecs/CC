import React, {useState, useEffect} from "react";
import axios from "axios";
import DashboardCard1 from "../../components/dashboard/card";
import './dashboard.css'

import { Container, Row, Col, Breadcrumb } from "react-bootstrap";


function Dashboard() {

  const [items, setItems] = useState([]);
  const [clients, setClients] = useState([]);

  const getClients = () => {
      axios.get('/api/customers')
      .then((response) => {
          const myClients = response.data
          setClients(myClients);
      });
  };

  const getItems = () => {
    axios.get('/api/warehouse/items')
    .then((response) => {
        const myItems = response.data
        setItems(myItems);
    });
};

  useEffect(() => getItems(), [])
  useEffect(() => getClients(), [])


  return (

      <Container>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
            </Breadcrumb> 
        <h1><b>Dashboard</b></h1>
        <br />

          <Row>
           <Col className="flexCenter">
              <DashboardCard1 title="Total Customers" content={
                clients.length
                }/>
            </Col>
            <Col className="flexCenter">
              <DashboardCard1 title='Warehouse Items' content={items.length}/>
            </Col>
          </Row>

      </Container>
    );
  }
  
  export default Dashboard;
  