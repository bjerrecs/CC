import React, { useState } from 'react';
import { Table, Container, Row, Col, Button, Modal } from 'react-bootstrap';

  export default class AddItem extends React.Component {

    state = {
      loading: true,
      items: null
    }
  
    async componentDidMount() {
        console.log('prop: ' + this.props.id)
        const url = 'http://localhost:4000/api/warehouse/item';
        console.log(url)
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