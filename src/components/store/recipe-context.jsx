import { createContext, useState, useEffect } from "react";

const RecipeList = createContext({
  recipeList: [],
  ingredientsList: [],
  curRecipe: 0,
  totalIngredients: 0.0,
  wastedIngredients: 0.0,
  changeRecipe: (recipe) => {},
  bookmarkRecipe: () => {},
  unbookmarkRecipe: () => {},
});

export function RecipeListProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipe, setLoadedRecipe] = useState([]);
  const [loadedIngredients, setLoadedIngredients] = useState([]);
  const [curNum, setCurNum] = useState(0);
  const [wasted, setWasted] = useState(0);
  const [total, setTotal] = useState(0);

  function changeCurRecipe(newRecipe) {
    console.log(newRecipe);
    setCurNum((prevRecipeNum) => {
      return newRecipe;
    });
  }

  function bookmarkCurRecipe() {
    console.log(
      "bookmarkCurRecipe",
      "https://htv7-96f00-default-rtdb.firebaseio.com/recipe/" +
        loadedRecipe[curNum].id +
        ".json"
    );
    setIsLoading(true);

    fetch(
      "https://htv7-96f00-default-rtdb.firebaseio.com/recipe/" +
        loadedRecipe[curNum].id +
        ".json",
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isBookmarked: true }),
      }
    )
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        getD();
      });
  }

  function unbookmarkCurRecipe(i) {
    console.log(
      "bookmarkCurRecipe",
      "https://htv7-96f00-default-rtdb.firebaseio.com/recipe/" +
        loadedRecipe[i].id +
        ".json"
    );

    setIsLoading(true);

    fetch(
      "https://htv7-96f00-default-rtdb.firebaseio.com/recipe/" +
        loadedRecipe[i].id +
        ".json",
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isBookmarked: false }),
      }
    )
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        getD();
      });
  }

  function getD() {
    setIsLoading(true);
    fetch("https://htv7-96f00-default-rtdb.firebaseio.com/recipe.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const recipes = [];
        const ingredients = [];

        for (const key in data) {
          const recipe = {
            id: key,
            ...data[key],
          };
          recipes.push(recipe);
        }

        var curId = 0;
        var flag = true;

        var countWasted = 0;
        var countTotal = 0;

        for (var i = 0; i < recipes.length; i++) {
          if (recipes[i].isBookmarked == true) {
            var ing = recipes[i].ingredients;
            for (var x in ing) {
              var ingLoc = 0;
              var fixIngLoc = 0;
              for (const ingN in ingredients) {
                // console.log("abc", ingredients[ingN].name);
                if (x == ingredients[ingN].name) {
                  flag = false;
                  fixIngLoc = ingN;
                }
                ingLoc++;
              }
              if (flag) {
                ingredients.push({
                  id: curId,
                  name: x,
                  amount: ing[x],
                });
                countTotal += ing[x];
              } else {
                ingredients[fixIngLoc] = {
                  id: ingredients[fixIngLoc].id,
                  name: x,
                  amount: ing[x] + ingredients[fixIngLoc].amount,
                };
              }
              flag = true;
              curId++;
            }
          }
        }

        setIsLoading(false);
        setLoadedRecipe(recipes);
        setLoadedIngredients(ingredients);
      });
  }

  useEffect(() => {
    getD();
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
    ingredientsList: loadedIngredients,
    curRecipe: curNum,
    totalIngredients: total,
    wastedIngredients: wasted,
    changeRecipe: changeCurRecipe,
    bookmarkRecipe: bookmarkCurRecipe,
    unbookmarkRecipe: unbookmarkCurRecipe,
  };

  return (
    <RecipeList.Provider value={recipesList}>
      {props.children}
    </RecipeList.Provider>
  );
}

export default RecipeList;
