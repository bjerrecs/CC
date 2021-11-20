import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

  export default class MaintenanceWindowTable extends React.Component {

    state = {
      loading: true,
      windows: null,
      type: ""
    }


  
    async componentDidMount() {
        const url = '/api/maintenance';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ windows: data, loading: false })
    }

    render() {

      if (this.state.loading) {
        return <div> Loading ... </div>
      }

      if (!this.state.windows) {
        return <div> No data ... </div>
      }

      if (!this.state.windows.status) {
        var status="No Status"
      }

      if (this.state.windows.type === "gencha") {
        var type="General Change"
      }
      if (this.state.windows.type === "majcha") {
         type="Major Change"
      }
      if (this.state.windows.type === "gn") {
         type="General Maintenance"
      }
      if (this.state.windows.type === "mininc") {
         type="Minor Incident"
      }
      if (this.state.windows.type === "majinc") {
         type="Major Incident"
      }

      return  <>
                {this.state.windows.map((windowArray) => (
                    <tr>
                        <td><b>{type}</b></td>
                        <td>{windowArray.reason}</td>
                        <td>{windowArray.internal}</td>
                        <td>{windowArray.startdate} - {windowArray.starttime} <br />{windowArray.enddate} - {windowArray.endtime}</td>
                        <td>{status}</td>
                        <td>
                            <ButtonGroup>
                                <Button>Start</Button>
                                <Button>Update</Button>
                                <Button>End</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                ))}
              </>
    }
  }




