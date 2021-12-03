import React, { useState} from 'react'
import axios from 'axios';
import { Button, OverlayTrigger, Tooltip, Form, Modal, Row, Col, FloatingLabel } from "react-bootstrap";
import { GoPencil } from "react-icons/go";

function UpdateOneItem(props)  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var amount = props.amount
    var amountRestock = props.amountrestock
    var id = props.id

    const handleSend = async() => {
        try {
            var newAmount = amount + 1
            await axios.put('/api/warehouse/item/' + id, { amount: newAmount })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSendRestock = async() => {
        try {
            var newAmountRestock = amountRestock + 1
            await axios.put('/api/warehouse/item/' + id, { restockamount: newAmountRestock })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <OverlayTrigger placement='top' overlay={
            <Tooltip>Update Item</Tooltip>
        }>  
        <Button type="submit" onClick={handleShow}>
            <GoPencil />
        </Button>
        </OverlayTrigger>  

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Update Item Information</Modal.Title>
            </Modal.Header>
                <Modal.Body>

                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel label="New Amount">
                            <Form.Control type="text" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <Button className="fullheight" onClick="handleSend">Update</Button>
                        </Col>
                    </Row>

                    <br />

                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel label="New Restock Amount">
                            <Form.Control type="text" />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <Button className="fullheight" onClick="handleSendRestock">Update</Button>
                        </Col>
                    </Row>
                    
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
  }
  
  export default UpdateOneItem;
  