import axios from "axios";
import React, {useState, useEffect} from "react";
import { Modal, Button, Form, Row, Col, InputGroup} from 'react-bootstrap'
import './secrets.css';

function AddSecretsModal(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [item, setItem] = useState("")
    const [title, setTitle] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [note, setNote] = useState("")
    const [customer, setCustomer] = useState()

    function setCustomerId(id) {
      setCustomer(id)
    }
   


    const handleSend = async() => {
      try {
          await axios.post("/api/secret", {
            item,
            title,
            username,
            password,
            note,
            customer
          })
      } catch (error) {
          console.log(error)
      }
  }

    useEffect(() => {
      setCustomerId(props.id)
    }, []);

    return (
      <>

      <Button variant="primary" onClick={handleShow}>
        Add New Secret
      </Button>

      <Modal show={show} onHide={handleClose} className="specialtext">
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSend}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Item/URL*
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="gcp.google.com" className="specialtext" alue={item} onChange={(e) => setItem(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Title
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Google GCP" className="specialtext" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Username
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="gcp-admin" className="specialtext" alue={username} onChange={(e) => setUsername(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Password
                    </Form.Label>
                    <Col sm="10">
                    <InputGroup className="mb-2">
                      <Form.Control type="password" id="password" className="specialtext" alue={password} onChange={(e) => setPassword(e.target.value)}/>
                      <InputGroup.Text className="specialtext">
                        <Button onclick="" className="a-dark">Generate</Button>
                      </InputGroup.Text>
                    </InputGroup>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                    Secret Note
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control type="password" className="specialtext" alue={note} onChange={(e) => setNote(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
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
  
  export default AddSecretsModal;