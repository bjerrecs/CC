
import React from "react";
import {Table, Button, OverlayTrigger,Tooltip} from 'react-bootstrap'
import { IoIosContacts } from "react-icons/io";



export default class FetchCompanies extends React.Component {

    state = {
        loading: true,
        companies: null
    }

    async componentDidMount() {
        const url = "/api/customers";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        this.setState({ companies: data, loading: false })
    }

    render() {

        if (this.state.loading) {
            return <div> Loading ... </div>
        }

        return <Table striped bordered hover size="sm" responsive>
              <thead>
                    <tr>
                    <th>Name</th>
                    <th>Short Name</th>
                    <th>Quick Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {this.state.companies.map((companyArray) => (
                        <tr> 
                            <td>{companyArray.fullname}</td>
                            <td>{companyArray.shortname}</td>
                            <td> 
                                <OverlayTrigger placement='top' overlay={
                                    <Tooltip >
                                    Process Documentation
                                    </Tooltip>
                                }>
                                <Button variant="light" className="formstylebtn" href={'/client/' + companyArray._id} > <img src="radar_dark.svg" width="24" alt="CC"/></Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement='top' overlay={
                                    <Tooltip >
                                    Freshdesk
                                    </Tooltip>
                                }>
                                <Button variant="light" className="formstylebtn" target="blank" href={companyArray.freshdesklink}> <img src="freshdesk512.png" width="24" alt="freshdesk"/> </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement='top' overlay={
                                    <Tooltip >
                                    Device42
                                    </Tooltip>
                                }>
                                <Button variant="light" className="formstylebtn" > <img src="device42.png" width="24" alt="device42"/> </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement='top' overlay={
                                    <Tooltip >
                                    CheckMK
                                    </Tooltip>
                                }>
                                <Button variant="light" className="formstylebtn"> <img src="checkmk512.png" width="24" alt="checkmk"/> </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement='top' overlay={
                                    <Tooltip >
                                    RFC Online
                                    </Tooltip>
                                }>
                                <Button variant="light" className="formstylebtn"> <b>RFC</b> </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement='top' overlay={
                                    <Tooltip >
                                    Contact Information
                                    </Tooltip>
                                }>
                                <Button variant="light" className="formstylebtn" target="blank" href={'https://leanon.freshdesk.com/a/contacts/filters/all?companyId=' + companyArray.freshdeskid}> <IoIosContacts /> </Button>
                                </OverlayTrigger>

                                </td>
                        </tr>
                    ))} 
                    
                </tbody>
                </Table>;
    }
}