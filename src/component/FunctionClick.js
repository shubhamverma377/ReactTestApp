import React  from 'react';

function FunctionClick(){
    function clickHandler(){
        console.log('Button is clikced')
    }
  return  (
      <div>
      <button onclick={clickHandler()}>click</button>
      </div>
      )
    }

export default FunctionClick

