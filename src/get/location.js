
import React from "react";
import {Form} from 'react-bootstrap'



export default class FetchWarehouseLocation extends React.Component {

    state = {
        loading: true,
        locations: null
    }

    async componentDidMount() {
        const url = "http://localhost:4000/api/warehouse/location";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ locations: data, loading: false })
    }

    render() {

        if (this.state.loading) {
            return <div> Loading ... </div>
        }

        return <Form.Select>
                    <option>Select location here</option>
                    {this.state.locations.map((locationArray) => (
                        <option value={locationArray._id}>{locationArray.name}</option>
                    ))}
                </Form.Select>
        ;
    }
}