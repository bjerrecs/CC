import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap'

export default class SignOutItem extends React.Component {

  state = {
    loading: true,
    items: null,
  }
  

  async componentDidMount() {
      const url = 'http://localhost:4000/api/customer/?id=' + this.props.id
      const accessApi = 'http://localhost:4000/api/client/access/?id=' + this.props.id
      const response = await fetch(url);
      const responseAccessApi = await fetch(accessApi);
      const data = await response.json();
      const dataAccessApi = await responseAccessApi.json();
      this.setState({ company: data, access: dataAccessApi, loading: false })
  }


  render() {

    if (this.state.loading) {
        return <div> <Button> Sign Out</Button></div>
    }

    if (!this.state.items) {
      return <div> <Button> Sign Out</Button></div>
    }


    return  <div>

            </div>

  }
}