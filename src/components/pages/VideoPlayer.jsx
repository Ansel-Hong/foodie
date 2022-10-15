import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import RecipeVid from "../recipe_vid/RecipeVid";
import Add2Cart from "../recipe_vid/add2Cart";

import RecipeList from "../store/recipe-context";

function VideoPlayer() {
    const recipeContext = useContext(RecipeList);
    const loadedRecipe = recipeContext.recipeList;
    const curRecipe = recipeContext.curRecipe;;

    function handleScroll (){
      console.log("scroolled");
      recipeContext.changeRecipe((curRecipe+1 >= loadedRecipe.length ? 0 : curRecipe+1));
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
    <section  onScroll={handleScroll}>
      {/* <h1 style={{margin: "5% 0 5% 5%"}} >Video Here</h1> */}
      <div>{recipesList[curRecipe]}</div>
      <Add2Cart/>
      <button onClick={handleScroll} className="btn btn-dark" >Next Vid</button>
    </section>
  );
}

export default VideoPlayer;
