import React  from 'react';
import ReactDom from 'react-dom';

function PortalsDemo(){
  
    return  ReactDom.createProtal(
    <h1>
      Portals DEMO
      </h1>,document.getElementById('portal-root')
      )

    }

export default PortalsDemo


