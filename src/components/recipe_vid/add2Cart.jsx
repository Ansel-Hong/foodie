// import { useState } from 'react'
import { useContext, useEffect } from "react";
import RecipeList from "../store/recipe-context";

import "./RecipeVid.css"

function Add2Cart({}) {
  const recipeContext = useContext(RecipeList);

  const liStyle = {height : "%"};

  function handleClick (){
    console.log("clicked");
    recipeContext.bookmarkRecipe();
  }

  return (
    <div className="add2Cart" data-layer="4">
        <button className="circle" onClick={handleClick}>
          <h2 className="circle-text" style={{fontSize:"55px"}}>+</h2>
        </button>
    </div>
  );
}

export default Add2Cart;
