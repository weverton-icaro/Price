import React from 'react';
import {Global} from './style';

function GlobalStyles(){
  return (
    <>
      <Global>
        <div className="bg-fixed"></div>
      </Global>
    </>  
  )
}

export default GlobalStyles;