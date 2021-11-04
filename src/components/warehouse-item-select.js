import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
  export default class WarehouseItemSelect extends React.Component {

    state = {
      loading: true,
      items: null
    }
  
    async componentDidMount() {
        console.log('prop: ' + this.props.id)
        const url = 'http://localhost:4000/api/warehouse/items';
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

      return  <>
                <Form.Select id="id" name="id">
                    <option>Select item</option>
                    {this.state.items.map((itemsArray) => (
                        <option value={itemsArray._id}>{itemsArray.name}</option> 
                    ))}
                </Form.Select>   
              </>
    }
  }

