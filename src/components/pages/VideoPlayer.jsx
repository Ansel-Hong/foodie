import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";

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

  return (
    <section>
      <h1>Video Here</h1>
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" /> */}
      <div>{ loadedRecipe.map( (recipe) => (
        <ReactPlayer url={recipe.vid} /> 
        ) ) }</div>
      {/* <ReactPlayer> {loadedRecipe}</ReactPlayer> */}
    </section>
  );
}

export default VideoPlayer;
