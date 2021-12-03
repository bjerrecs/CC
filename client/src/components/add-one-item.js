import React, { useState} from 'react'
import axios from 'axios';
import { Button, OverlayTrigger, Tooltip, Form, Modal, Row, Col, FloatingLabel } from "react-bootstrap";
import { GoPencil } from "react-icons/go";

function UpdateOneItem(props)  {
    
    const [show, setShow] = useState(false);
    const [amountinput, setAmountInput] = useState("")
    const [restockamountinput, setRestockAmountInput] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var amount = props.amount
    var amountRestock = props.amountrestock
    var id = props.id

    if (!amountinput) {
        var newAmount = amount
    } else {
        newAmount = amountinput
    }

    if (restockamountinput) {
        newRestockAmount = restockamountinput
    } else {
        var newRestockAmount = amountRestock
    }

    const handleSend = async() => {
        try {
            await axios.put('/api/warehouse/item/' + id, { amount: newAmount })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSendRestock = async() => {
        console.log('New Restock: ' + restockamountinput)
        try {
            await axios.put('/api/warehouse/item/restock/' + id, { restockamount: newRestockAmount })
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
                                <Form.Control type="number" value={amountinput} onChange={(e)   => setAmountInput(e.target.value)} />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <Button className="fullheight" onClick={handleSend}>Update</Button>
                        </Col>
                    </Row>

                    <br />

                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel label="New Restock Amount">
                                <Form.Control type="number" value={restockamountinput} onChange={(e) => setRestockAmountInput(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <Button className="fullheight" onClick={handleSendRestock}>Update</Button>
                        </Col>
                    </Row>
                    
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
  
  export default UpdateOneItem;
  