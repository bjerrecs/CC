import React from 'react';
import { Tooltip, OverlayTrigger, ButtonGroup, Button } from 'react-bootstrap';
import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs";
import AddOneItem from './add-one-item';
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
                {this.state.items.map((itemsArray) => (
                    <tr>
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

                            <OverlayTrigger placement='top' overlay={
                                <Tooltip >Add Item</Tooltip>
                              }>
                              <Button>
                              <BsFillPlusCircleFill />
                              </Button>
                            </OverlayTrigger>
                            <AddOneItem id="61a619613212a80832f21d1e"/>
                              <OverlayTrigger placement='top' overlay={
                                <Tooltip >Remove Item</Tooltip>
                              }>
                              <Button>
                                <BsFillDashCircleFill />
                              </Button>
                            </OverlayTrigger>  
                          </ButtonGroup>
                        </td>
                    </tr>
                ))}
              </>
    }
  }




