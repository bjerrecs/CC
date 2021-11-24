import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';

function SignOutItem() {

    const [showSignOut, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [items, setItems] = useState([]);

    const getItems = () => {
        axios.get('/api/warehouse/items')
        .then((response) => {
            const myItems = response.data
            setItems(myItems);
        });
    };

    useEffect(() => getItems(), [])

    const [formValue, setformValue] = React.useState({
        id: ''
      });

      const handleSubmit = async() => {
        // store the states in the form data
        const loginFormData = new FormData();
        loginFormData.append("id", formValue.id)
      
        try {
          // make axios post request
          await axios({
            method: "delete",
            url: "/api/warehouse/item/" + formValue.id,
            data: loginFormData
          });
        } catch(error) {
          console.log(error)
        }
      }
    
    const handleChange = (event) => {
    setformValue({
        ...formValue,
        [event.target.name]: event.target.value
    });
    }


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
                <Form onSubmit={handleSubmit} >
                    <Form.Group className="mb-3">
                        <Form.Label>Item</Form.Label>
                        <Form.Select id="id" name="id" required onChange={handleChange} value={formValue.id}>
                            <option value="">Select item</option>
                            {items.map((items) => (
                                <option value={items._id}>{items.name}</option>
                                
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
