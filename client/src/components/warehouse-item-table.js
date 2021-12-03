import React from 'react';
import { Tooltip, OverlayTrigger, ButtonGroup, Table } from 'react-bootstrap';
import UpdateOneItem from './add-one-item';
import './warehouse.css'


  export default class WarehouseLocationTable extends React.Component {

    state = {
      loading: true,
      items: null
    }
  
    async componentDidMount() {
        const url = '/api/warehouse/items';
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
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Item Name</th>
                      <th>Vendor</th>
                      <th>Model</th>
                      <OverlayTrigger placement='top' overlay={
                          <Tooltip >Current amount of this item</Tooltip>
                      }>
                        <th>Amount</th>
                      </OverlayTrigger>  
                      <OverlayTrigger placement='top' overlay={
                          <Tooltip >When we need to reorder the item?</Tooltip>
                      }>
                        <th>Restock</th>
                      </OverlayTrigger>  
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.items.map((itemsArray) => (
                    <tr key={itemsArray._id}>
                        <td>{itemsArray.location}</td>
                          <td>
                            <OverlayTrigger placement='top' overlay={
                              <Tooltip >Added by {itemsArray.addedby}</Tooltip>
                            }>
                              <p>{itemsArray.name}</p>
                            </OverlayTrigger>
                          </td>
                        <td>{itemsArray.vendor}</td>
                        <td>{itemsArray.model}</td>
                        <td>{itemsArray.amount}</td>
                        <td>{itemsArray.restockamount}</td>
                        <td>
                          <ButtonGroup>
                            <UpdateOneItem id={itemsArray._id} amount={itemsArray.amount} amountrestock={itemsArray.restockamount}/> 
                          </ButtonGroup>
                        </td>
                    </tr>
                  ))}
                  </tbody>
                </Table>
              </>
    }
  }




