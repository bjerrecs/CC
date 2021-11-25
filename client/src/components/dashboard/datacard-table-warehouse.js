import React from 'react';
import { Table } from 'react-bootstrap';

  export default class DatacardTableWarehouse extends React.Component {

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

      return  <>
      <Table striped bordered hover>
        <thead>
            <tr>
            <th colSpan="2">Name</th>
            <th>Added by</th>
            </tr>
        </thead>
        <tbody>
            {/* Get the last 3 elements from the items list*/}
            {this.state.items.reverse().slice(0, 3).map((itemsArray) => (
                <tr>
                    <td colSpan="2">{itemsArray.name}</td>
                    <td>{itemsArray.addedby}</td>
                </tr>
            ))}
        </tbody>
        </Table>
              </>
    }
  }




