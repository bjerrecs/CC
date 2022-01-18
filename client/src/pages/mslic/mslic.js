import React from "react";
import { Container, Table } from "react-bootstrap";
import PageHeader from '../../components/pageheader'
import CCBreadcrumb from '../../Breadcrumb'
import MSLiclist from '../../get/company_mslic';


function MSLic() {

  return (
      <Container>
        <CCBreadcrumb item0="Home" item1="Reports" active="Microsoft Licenses"/>
        <PageHeader h1="Licens Dashboard" h3="Windows Server Licens (Core & RDS)"/>

        <MSLiclist />
     
      </Container>
    );
  }
  
  export default MSLic;
  