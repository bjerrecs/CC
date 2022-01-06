import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

  export default class MaintenanceWindowTable extends React.Component {

    state = {
      loading: true,
      windows: null,
      type: "",
      typename: ""
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
        this.setState({typename: "General Change"})
      }
      if (this.state.windows.type === "majcha") {
        this.setState({typename: "Major Change" })
      }
      if (this.state.windows.type === "gn") {
        this.setState({typename: "General Maintenance"})
      }
      if (this.state.windows.type === "mininc") {
        this.setState({typename: "Minor Incident"})
      }
      if (this.state.windows.type === "majinc") {
        this.setState({typename: "Major Incident"})
      }


      return  <>
                {this.state.windows.map((windowArray) => (
                    <tr>
                        <td><b>{windowArray.type}</b></td>
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




