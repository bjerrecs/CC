import React from 'react';
import { Form } from 'react-bootstrap';
  export default class ReactRemoveItem extends React.Component {

    handleSubmit(event) {
        console.log("test")
       }

    render() {

      return  <>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">test</button>
                </form> 
              </>
    }
  }

