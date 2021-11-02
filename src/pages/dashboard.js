import DashboardCard from "../components/dashboardCard";
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  


    return (
      <Container>

        <br />
        <h1><b>Dashboard</b></h1>
        <br />
          <Row>
            <Col>
              <DashboardCard text="Total Customers" header="69"/>
            </Col>
            <Col>
              <DashboardCard text="Current Rack Capacity" header="60/80"/>
            </Col>
            <Col>
              <DashboardCard text="Total Customers" header="69"/>
            </Col>
            <Col>
              <DashboardCard text="Total Customers" header="69"/>
            </Col>
          </Row>
      </Container>
    );
  }
  
  export default Dashboard;
  