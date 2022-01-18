import React from 'react';
import { Table } from 'react-bootstrap'
export default class FetchCompany extends React.Component {

    state = {
        loading: true,
        companies: null
    }

    async componentDidMount() {
        const url = "/api/customers";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ companies: data, loading: false })
    }

    render() {

    if (this.state.loading) {
        return <div> Loading ... </div>
    }

    if (!this.state.companies) {
      return <div> No data ... </div>
    }
    
    return  <div>
                 <Table responsive striped hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            {this.state.companies.map((companyArray) => (
                                <th>{companyArray.fullname}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MS Datacenter Core</td>
                            <td>7</td>
                            <td>15</td>
                            <td>23</td>
                        </tr>
                        <tr>
                            <td>RDS pr. user</td>
                            <td>40</td>
                            <td>61</td>
                            <td>127</td>
                        </tr>
                    </tbody>
                    </Table>
            </div>
    }
}