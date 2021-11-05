import React from "react";
import { Container, Table, Form,InputGroup, Row, Col, ButtonGroup } from "react-bootstrap";
import WarehouseLocationTable from "../../components/warehouse-item-table";
import AddItemModal from "./additemmodal";
import SignOutItem from './signoutitemmodal';

function Warehouse() {

    return (
      <Container>
          <Row>
              <Col></Col>
                <Col xs={10}>
                    <h1>Warehouse</h1>

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
  