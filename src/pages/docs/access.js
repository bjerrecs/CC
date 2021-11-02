import React from 'react';

  

  export default class AccessPage extends React.Component { 

    

    state = {
      loading: true,
      company: null
    }
    
  
    async componentDidMount() {
        console.log('prop: ' + this.props.id)
        const url = 'http://localhost:4000/api/customer/?id=' + this.props.id
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ company: data, loading: false })
    }

    render() {

      if (this.state.loading) {
        return <div> Loading ... </div>
      }

      if (!this.state.company.fullname) {
        return <div> No data ... </div>
      }

      return <div>

              <br />

              <h2><b>{this.state.company.fullname}</b><br /><h4>Support:</h4></h2>

              <br />
              
              </div>
    }
  }