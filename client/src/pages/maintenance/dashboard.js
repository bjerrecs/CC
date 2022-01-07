import React from "react";
import { Container, Breadcrumb, Table } from "react-bootstrap";
import MaintenanceWindowTable from "../../components/maintenance/windowtable";
import PageTitle from '../../components/title'
import PageHeader from '../../components/pageheader'
import CCBreadcrumb from '../../Breadcrumb'


function MaintenanceDashboard() {


  return (
      <Container>
        <CCBreadcrumb item0="Home" item1="Maintenance" active="Dashboard"/>
        <PageHeader h1="Maintenance Dashboard" h3="View planned maintenance windows"/>

        <Table responsive>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Reason</th>
                    <th>Responseble</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <MaintenanceWindowTable />
            </tbody>
        </Table>



      </Container>
    );
  }
  
  export default MaintenanceDashboard;
  