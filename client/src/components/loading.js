import React from 'react';
import ReactLoading from "react-loading";
import './loading.css'


function LoadingComponent() {
    return (
        <div className="bgcolor">
        <div className="load">
            <ReactLoading type="bars" color="#fff" className="sizeme"/>
        </div>
      </div>
    );
  };
  
export default LoadingComponent;
  