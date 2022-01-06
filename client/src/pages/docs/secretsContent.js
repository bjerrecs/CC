import React, { useState} from 'react';
import { Container, Breadcrumb, Table, ButtonGroup, Button } from "react-bootstrap";


import './secrets.css'

export default class SecretsPageContent extends React.Component {

  state = {
    loading: true,
    client: null,
    secrets: null
  }


  async componentDidMount() {
    //client
    const url = '/api/customer/?id=' + this.props.id
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ client: data })

    // Secrets
    const secretsurl = '/api/secrets/' + this.props.id
    const secretsresponse = await fetch(secretsurl);
    const secretsdata = await secretsresponse.json();
    this.setState({ secrets: secretsdata })
  };

  render() {
    return <>



</>
  }
}
  