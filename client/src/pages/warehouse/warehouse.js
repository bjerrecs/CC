import React from "react";
import { Container,Form,InputGroup,ButtonGroup,Breadcrumb } from "react-bootstrap";
import WarehouseLocationTable from "../../components/warehouse-item-table";
import AddItemModal from "./additemmodal";
import SignOutItem from './signoutitemmodal';
import Pageheader from '../../components/pageheader'
import PageTitle from '../../components/title'
import '../../components/warehouse.css'


function Warehouse() {

    return (
      <Container>
                    <PageTitle title="Warehouse" />
                    <br />
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Warehouse</Breadcrumb.Item>
                        <Breadcrumb.Item active>Search</Breadcrumb.Item>
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
                 <WarehouseLocationTable />
      </Container>
    );
  }
  
  export default Warehouse;
  