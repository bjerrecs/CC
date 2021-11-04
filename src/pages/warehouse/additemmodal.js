import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

function AddItemModal() {

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
                <Form action="http://localhost:4000/api/warehouse/item" method="post">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Warehouse Location</Form.Label>
                        <Form.Control type="text" placeholder="AA-99" id="location" name="location"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="text" placeholder="Intel Xeon E5-2667 v2" id="name" name="name"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Asset Number</Form.Label>
                        <Form.Control type="text" placeholder="ABC12345" id="assetid" name="assetid"/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
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
