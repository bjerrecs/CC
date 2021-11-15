import React, {useState} from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

function ChnageProfile() {

    const [showProfileManagement, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

        <Button variant="primary" onClick={handleShow}>
            Change Profile
        </Button>

        <Modal show={showProfileManagement} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Profile Management</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit="">

                <Form.Group className="mb-3" controlId="profile-name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Jon Doe" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="profile-titile">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Jon Doe" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="profile-mail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="abc@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="profile-mail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="12345678" />
                </Form.Group>

                <Button> Submit Changes</Button>

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

export default ChnageProfile;
