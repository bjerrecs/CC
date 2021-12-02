import React, {useState} from 'react'
import { Button, Modal, Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import ItemLocationSelect from '../../components/item-location-select';
import { useAuth0 } from "@auth0/auth0-react";

function AddItemModal() {

    const { user } = useAuth0(); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
        <>

        <Button variant="primary" onClick={handleShow}>
            Add Item
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add New Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action="/api/warehouse/item" method="POST">
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel label="Full Name">
                            <Form.Control id="name" type="text" placeholder="Intel Xeon E5-2667 v2" name="name"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label="Short Name">
                            <Form.Control type="text" placeholder="E5-2667v2" id="shortname" name="shortname"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel label="Vendor">
                            <Form.Control type="text" placeholder="NVIDIA" id="vendor" name="vendor"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label="Model Number">
                            <Form.Control type="text" placeholder="E5-2667v2" id="model" name="model"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2">
                    <Col md>
                        <FloatingLabel label="Amount">
                            <Form.Control type="text" placeholder="NVIDIA" id="amount" name="amount"/>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel label="Restock Amount">
                            <Form.Control type="text" placeholder="E5-2667v2" id="restockamount" name="restockamount"/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2">
                    <Col>
                        <ItemLocationSelect></ItemLocationSelect>
                    </Col>
                </Row>
                    

                    <Form.Group className="mb-3">
                        <Form.Control type="hidden" placeholder={user.name} defaultValue={user.name}id="addedby" name="addedby"/>
                    </Form.Group>


                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>

        </>
  );
}

export default AddItemModal;
