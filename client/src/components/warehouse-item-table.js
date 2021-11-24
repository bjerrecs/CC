import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

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
      console.log(this.state.items)

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
                        <td>{itemsArray.assetid}</td>
                    </tr>
                ))}
              </>
    }
  }




