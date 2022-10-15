import React from "react";
// import { useState, useEffect } from "react";
import { useContext } from "react";
import RecipeVid from "../recipe_vid/RecipeVid";

import RecipeList from "../store/recipe-context";

import "../recipe_vid/RecipeVid.css"

function VideoPlayer() {
    const recipeContext = useContext(RecipeList);
    const loadedRecipe = recipeContext.recipeList;
    const curRecipe = recipeContext.curRecipe;;

    function changeCurRecipe(newRecipe){
        recipeContext.changeRecipe(curRecipe);
    }

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
    <section className="player-wrapper">
      <h1 style={{margin: "5% 0 5% 5%"}} >Video Here</h1>
      <div onScroll={changeCurRecipe}>{recipesList[curRecipe]}</div>
      <button className="button" onClick={changeCurRecipe}>Next Vid</button>
    </section>
  );
}

export default VideoPlayer;
