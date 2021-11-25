import React from 'react';
import { Table } from 'react-bootstrap';

  export default class DatacardTableMaintenance extends React.Component {

    state = {
      loading: true,
      maintenance: null
    }
  
    async componentDidMount() {
        const url = '/api/maintenance';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ maintenance: data, loading: false })
    }

    

    render() {

      if (this.state.loading) {
        return <div> Loading ... </div>
      }
      var today = new Date();
      var todayFormat = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()

      return  <>
      <Table striped bordered hover>
        <thead>
            <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
            </tr>
        </thead>
        <tbody>
            {/* Get the last 3 elements from the items list*/}
            {this.state.maintenance.reverse().slice(0, 3).map((itemsArray) => (
                <tr>
                    <td>{itemsArray.startdate}</td>
                    <td>{itemsArray.starttime}</td>
                    <td>{itemsArray.reason}</td>
                </tr>
            ))}
        </tbody>
        </Table>
              </>
    }
  }




