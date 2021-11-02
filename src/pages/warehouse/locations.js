import { Container, Form, Button } from "react-bootstrap";
import FetchWarehouseLocation from "../../get/location";

function WarehouseLocation() {
    return (
      <Container>
            <br/><br/>
            <h1>Manage Locations of Warehouse</h1>

            <br/><br/>
            <h3>Add new location</h3>
            <hr />
            <Form action="http://localhost:4000/api/warehouse/location" method="post">
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Location Name</Form.Label>
                    <Form.Control type="text" placeholder="AA-99" id="name" name="name"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <br/><br/>
            <h3>Rename location</h3>
            <hr />
            <Form action="http://localhost:4000/api/warehouse/location" method="put">
                <Form.Group className="mb-3" >
                    <Form.Label>Select Location</Form.Label>
                        <FetchWarehouseLocation />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>New Location Name</Form.Label>
                    <Form.Control type="email" placeholder="AA-99" id="newname" name="newname"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <br/><br/>
            <h3>Delete location</h3>
            <hr />
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Select Location</Form.Label>
                    <FetchWarehouseLocation />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
      </Container>
    );
  }
  
  export default WarehouseLocation;
  