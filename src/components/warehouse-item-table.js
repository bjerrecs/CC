import React from 'react';

  export default class WarehouseLocationTable extends React.Component {

    state = {
      loading: true,
      items: null
    }
  
    async componentDidMount() {
        console.log('prop: ' + this.props.id)
        const url = 'http://localhost:4000/api/warehouse/items';
        console.log(url)
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ items: data, loading: false })
    }

    render() {

      if (this.state.loading) {
        return <div> Loading ... </div>
      }

      if (!this.state.items) {
        return <div> No data ... </div>
      }

      return  <>
                {this.state.items.map((itemsArray) => (
                    <tr>
                        <td>{itemsArray.location}</td>
                        <td>{itemsArray.name}</td>
                        <td>{itemsArray.assetid}</td>
                    </tr>
                ))}
              </>
    }
  }




