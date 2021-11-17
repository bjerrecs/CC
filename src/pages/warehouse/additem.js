import React, { useState } from 'react';
import { Table, Container, Row, Col, Button, Modal } from 'react-bootstrap';

  export default class AddItem extends React.Component {

    state = {
      loading: true,
      items: null
    }
  
    async componentDidMount() {
        const url = '/api/warehouse/item';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ items: data, loading: false })
    }

    render() {

      if (this.state.loading) {
        return <div> Loading ... </div>
      }

      if (!this.state.items) {
        return <div> No data ... </div>
      }

      return  <Container>

   
              </Container>
    }
  }