import React from 'react';
import { Link } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <p style={{textAlign:"center",color:"black",padding:"25vh"}}>
                <h2>Page Not Found</h2>
              <Link style={{textAlign:"center",color:"black"}} to="/dashboard">Go to home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;