import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import WarehouseItemSelect from '../../components/warehouse-item-select';




function SignOutItem() {

    useEffect(() => {
        // ⬇ This calls my get request from the server
        getItems();
      }, []);

    const [sent, setSent] = useState(false)
    const [id, setID] = useState("")

    const [showSignOut, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getItems = async() => {
        try {
            await axios.get("http://localhost:4000/api/warehouse/items")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignOut = async() => {
        setSent(true)
        try {
            await axios.get("http://localhost:4000/api/warehouse/item/delete/", {
                id
            })
        } catch (error) {
            console.log(error)
        }
    }


    // Form Validation
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
    
        setValidated(true);
    };

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
                <Form onSubmit="handleSignOut">
                    <Form.Group className="mb-3">
                        <Form.Label>Item</Form.Label>
                        <Form.Select id="id" name="id" required>
                            <option value="">Select item</option>
                            {((itemsArray) => (
                                <option value={itemsArray._id}>{itemsArray.name}</option> 
                            ))}
                        </Form.Select>
                    </Form.Group>
  

                    <Button variant="primary" type="submit" >
                        Sign Item Out
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

export default SignOutItem;
