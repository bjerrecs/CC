import React from 'react';
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

