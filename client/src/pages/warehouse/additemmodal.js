import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
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
                    <Form.Group className="mb-3">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control type="text" placeholder="Intel Xeon E5-2667 v2" id="name" name="name"/>
                    </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Label>Warehouse Location</Form.Label>
                        <ItemLocationSelect></ItemLocationSelect>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Asset Number</Form.Label>
                        <Form.Control type="text" placeholder="ABC12345" id="assetid" name="assetid"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control type="hidden" placeholder={user.name} defaultValue={user.name}id="addedby" name="addedby"/>
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
