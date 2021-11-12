import React from "react";
import { Container, Table, Form,InputGroup, Row, Col, ButtonGroup, Breadcrumb, Button } from "react-bootstrap";
import WarehouseLocationTable from "../../components/warehouse-item-table";
import AddItemModal from "./additemmodal";
import SignOutItem from './signoutitemmodal';
import Pageheader from '../../components/pageheader'

function handleSubmit(event) {
    console.log("test")
   }

function Warehouse() {

    return (
      <Container>
          <Row>
              <Col></Col>
                <Col xs={10}>

                    <br />
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Warehouse</Breadcrumb.Item>
                    </Breadcrumb>
                    <Pageheader h1="Warehouse"></Pageheader>                    

                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <InputGroup className="mb-2">
                                <Form.Control type="text" className="txtaligncenter"/>
                                <InputGroup.Text>
                                    <ButtonGroup>
                                        <AddItemModal></AddItemModal>
                                        <SignOutItem></SignOutItem>
                                    </ButtonGroup>
                                </InputGroup.Text>
                            </InputGroup>
                        </Form.Group>
                    </Form>

                    <Button onSubmit={handleSubmit}> test</Button>

                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Item Name</th>
                                <th>Device42 ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            <WarehouseLocationTable />
                        </tbody>
                    </Table>
                </Col>
                <Col></Col>
            </Row>
      </Container>
    );
  }
  
  export default Warehouse;
  