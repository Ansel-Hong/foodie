import { createContext, useState, useEffect } from "react";

const RecipeList = createContext({
  recipeList: [],
  curRecipe: 0,
  changeRecipe: (recipe) => {},
  bookmarkRecipe: () => {},
  unbookmarkRecipe: () => {}
});

export function RecipeListProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedRecipe, setLoadedRecipe] = useState([]);
  const [curNum, setCurNum] = useState(0);

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


  function getD(){
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
    curRecipe: curNum,
    changeRecipe: changeCurRecipe,
    bookmarkRecipe: bookmarkCurRecipe,
    unbookmarkRecipe: unbookmarkCurRecipe
  };

  return (
    <RecipeList.Provider value={recipesList}>
      {props.children}
    </RecipeList.Provider>
  );
}

export default RecipeList;
