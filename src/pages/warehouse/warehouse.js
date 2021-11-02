import React, { useState} from "react";
import { Container, Table, Form, Button,InputGroup, Modal } from "react-bootstrap";

function Warehouse() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);


    return (
      <Container>
          <h1>Warehouse</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <InputGroup className="mb-2">
                    <Form.Control type="text" className="txtaligncenter"/>
                    <InputGroup.Text><Button>Add item</Button></InputGroup.Text>
                </InputGroup>
            </Form.Group>
            </Form>

          <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Location</th>
                <th>Item Name</th>
                <th>Device42 ID</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>AA-01</td>
                    <td>Intel Xeon E5-2667v2</td>
                    <td>LO124151</td>
                    <td className="tdCenter">
                        <Button className="formButtonPadding" onClick={handleShow1}>Sign Out</Button>
                        <Button className="formButtonPadding" onClick={handleShow}>Change Location</Button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>AA-01</td>
                    <td>Intel Xeon E5-2667v2</td>
                    <td>LO124152</td>
                    <td className="tdCenter">
                        <Button className="formButtonPadding">Sign Out</Button>
                        <Button className="formButtonPadding">Change Location</Button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>AA-01</td>
                    <td>Intel Xeon E5-2667v2</td>
                    <td>LO124153</td>
                    <td className="tdCenter">
                        <Button className="formButtonPadding">Sign Out</Button>
                        <Button className="formButtonPadding">Change Location</Button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>AA-02</td>
                    <td>Samsung DDR4 64GB ECC 2660Mhz</td>
                    <td>LO124154</td>
                    <td className="tdCenter">
                        <Button className="formButtonPadding">Sign Out</Button>
                        <Button className="formButtonPadding">Change Location</Button>
                    </td>
                </tr>
            </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Change Location</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                <Modal.Title>Sign hardware out</Modal.Title>
                </Modal.Header>
                <Modal.Body>You are about to sign X out</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose1}>
                    Sign Out
                </Button>
                </Modal.Footer>
            </Modal>


      </Container>
    );
  }
  
  export default Warehouse;
  