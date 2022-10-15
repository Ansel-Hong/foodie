import React from "react";
// import { useState, useEffect } from "react";
import { useContext } from "react";
import RecipeVid from "../recipe_vid/RecipeVid";

import RecipeList from "../store/recipe-context";

function VideoPlayer() {
  const recipeContext = useContext(RecipeList);
  const curRecipe = recipeContext.curRecipe;
  const loadedRecipes = recipeContext.recipeList;

  function changeCurRecipe(recipe){
    recipeContext.changeRecipe(recipe);
  }

  const recipesList = loadedRecipes.map((recipe) => (
    <RecipeVid
      id={recipe.id}
      recipename={recipe.name}
      vid={recipe.vid}
      thumbnail={recipe.pic}
      ingredients={recipe.ingredients}
      username={recipe.userName}
      userpf={recipe.userPf} //? user profile picture
      description={recipe.discription}
    /> //? i misspelled description in firebase
  ));

  return (
    <section>
      <h1>Video Player</h1>
      <div>{recipesList[curRecipe]}</div>
      <button onClick={changeCurRecipe}>Next Vid</button>
    </section>
  );
}

export default VideoPlayer;
