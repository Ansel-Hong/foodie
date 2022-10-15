import { createContext, useState, useEffect } from 'react';

const RecipeList = createContext({
  recipeList: [],
});

export function RecipeListProvider(props) {
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

    const recipesList = {
      recipeList: loadedRecipe
    };

  return (
    <RecipeList.Provider value={recipesList}>
      {props.children}
    </RecipeList.Provider>
  );
}

export default RecipeList;
