import React from "react";
// import { useState, useEffect } from "react";
import { useContext } from "react";
import RecipeVid from "../recipe_vid/RecipeVid";

import RecipeList from "../store/recipe-context"

function VideoPlayer() {
    const loadedRecipe = useContext(RecipeList).recipeList;

       const recipesList = loadedRecipe.map((recipe) => (
      <RecipeVid
        id={recipe.id}
        recipename={recipe.name}
        vid={recipe.vid}
        thumbnail={recipe.pic}
        ingredients={recipe.ingredients}
        username={recipe.userName}
        userpf={recipe.userPf} //? user profile picture
        description={recipe.description}/> //? i misspelled description in firebase
    ));
    
  return (
    <section>
      <h1 style={{margin: "5% 0 5% 5%"}} >Video Here</h1>
      <div>{ recipesList[0]
         }</div>
    </section>
  );
}

export default VideoPlayer;
