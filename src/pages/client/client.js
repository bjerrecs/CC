import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FetchCompany from '../../get/company';
import PageHeader from '../../components/pageheader'

const Client = () => {

  const {id} = useParams();

  return  <Container>
    
            <FetchCompany id={id}/>
          </Container>
}

export default Client