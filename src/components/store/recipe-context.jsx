import { createContext, useState, useEffect } from 'react';

const RecipeList = createContext({
  recipeList: [],
  curRecipe: 0,
  changeRecipe: (recipe) => {} 
});

export function RecipeListProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipe, setLoadedRecipe] = useState([]);
  const [curNum, setCurNum] = useState(0);

  function changeCurRecipe(newRecipe){
    setCurNum((prevRecipeNum) => {
        return (prevRecipeNum+1 >= loadedRecipe.length ? 0 : prevRecipeNum+1);
    })
  }

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
      recipeList: loadedRecipe,
      curRecipe: curNum,
      changeRecipe: changeCurRecipe
    };

  return (
    <RecipeList.Provider value={recipesList}>
      {props.children}
    </RecipeList.Provider>
  );
}

export default RecipeList;
