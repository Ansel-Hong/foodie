import { useState } from 'react'

import "./RecipeVid.css"

function Add2Cart({}) {
  const liStyle = {height : "%"};

  function handleClick (){
    console.log("clicked");
  }

  return (
    <div className="add2Cart" data-layer="4">
        <button className="circle" onClick={handleClick}>
          <h2 className="circle-text">+</h2>
        </button>
    </div>
  );
}

export default Add2Cart;
