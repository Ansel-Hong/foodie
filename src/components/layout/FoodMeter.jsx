import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react'
import { Link } from "react-router-dom";
import RecipeList from '../store/recipe-context';

import './Navigation.css'


function FoodMeter({percentage}) {
  const recipeContext = useContext(RecipeList);
  const wasted = useContext(RecipeList).wastedIngredients;
  const total = useContext(RecipeList).totalIngredients;

  var percentageupdated = Math.round(100* ((total-wasted)/total));
  useEffect(() => {
    percentageupdated =  Math.round(100* ((total-wasted)/total));
    console.log("percentage waste", percentageupdated);
  }, [wasted, total]);
  
  const liStyle = {height : percentageupdated + "%"};


  return (
    <div className="food-meter">
      <Link to="/fridge">
          <div className="circle">
            <h2 className="circle-text">{percentageupdated}</h2>
            <div className="box" style={liStyle}>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FoodMeter;
