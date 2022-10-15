import React from "react";
import { useState, useEffect } from "react";
import RecipeVid from "../recipe_vid/RecipeVid";

function VideoPlayer() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipe, setLoadedRecipe] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://htv7-96f00-default-rtdb.firebaseio.com/recipe.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = [];

        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key],
          };
          recipes.push(recipe);
        }

        setIsLoading(false);
        setLoadedRecipe(recipes);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  const recipesList = loadedRecipe.map( (recipe) => (
    <RecipeVid 
    id={recipe.id}
    recipename={recipe.name}
    vid={recipe.vid}
    thumbnail={recipe.pic}
    ingredients={recipe.ingredients}
    username={recipe.userName}
    userpf={recipe.userPf} //? user profile picture
    description={recipe.discription}/> //? i misspelled description in firebase
    ) );

  return (
    <section>
      <h1>Video Here</h1>
      <div>{ recipesList[1]
    //   loadedRecipe.map( (recipe) => (
    //     <RecipeVid 
    //     id={recipe.id}
    //     recipename={recipe.name}
    //     vid={recipe.vid}
    //     thumbnail={recipe.pic}
    //     ingredients={recipe.ingredients}
    //     username={recipe.userName}
    //     userpf={recipe.userPf}/>
    //     ) )
         }</div>
    </section>
  );
}

export default VideoPlayer;
