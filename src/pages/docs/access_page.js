import React, {useState} from 'react';
import { Container, Breadcrumb, Form, Button, Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/pageheader'
import AccessPage from './access';

const AccessPageView = () => {

  const {id} = useParams();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return  <Container>
            <br />
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href={'/client/' + id}>
                Client
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Access Information</Breadcrumb.Item>
            </Breadcrumb>
            <PageHeader h1="Access Information" h3=""/>
            <AccessPage id={id}/>
            <Form>
              <Button>
                Add
              </Button>
            </Form>
          </Container>
}

export default AccessPageView
