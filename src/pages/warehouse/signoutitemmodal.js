import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import WarehouseItemSelect from '../../components/warehouse-item-select';
import ReactRemoveItem from './reactRemoveItem'



function SignOutItem() {

    const [showSignOut, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

        <Button variant="primary" onClick={handleShow}>
            Sign Item Out
        </Button>

        <Modal show={showSignOut} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Sign Item Out</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form action="http://localhost:4000/api/warehouse/item/delete/" method="delete">
                    <Form.Group className="mb-3">
                        <Form.Label>Item</Form.Label>
                        <WarehouseItemSelect id="6188f266017a4c66e8390ba7"></WarehouseItemSelect>
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                    <ReactRemoveItem />
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

export default SignOutItem;
