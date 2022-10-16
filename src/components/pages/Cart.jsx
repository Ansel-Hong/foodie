import ItemList from "../Cart/itemList";
import IngredientList from "../Fridge/IngredientList";
import RecipeList from "../store/recipe-context";

import { useContext, useEffect } from "react";

// var items = [
//   {
//   id: "1",
//   name: "sdfsd",
//   amount: 3
// },
//   {
//   id: "2",
//   name: "ugh",
//   amount: 3.5
// },
// ]
var items = [];
var ingredientDict = {};
var val = 0;

function ingredientChecked(id) {
  const newIngredients = [...ingredients];
  const ingredient = newIngredients.find((ingredient) => ingredient.id === id);
  ingredient.complete = !ingredient.complete;
  setIngredients(newIngredients);
}

function Cart() {
  const recipeContext = useContext(RecipeList);
  const loadedRecipe = recipeContext.recipeList;
  const loadedIngredients = recipeContext.ingredientsList;

  // useEffect(() => {
  //   for (var i = 0; i < loadedRecipe.length; i++) {
  //     if (loadedRecipe[i].isBookmarked == true) {
  //       var ing = loadedRecipe[i].ingredients;
  //       console.log(ing);
  //       ingredientDict = ing;
  //       ingredientDict = ing;
  //       for (var x in ing) {
  //         items.push({
  //           id: val,
  //           name: x,
  //           amount: ing[x],
  //         });
  //         val++;
  //       }
  //     }
  //   }
  // }, []);

  console.log(loadedIngredients);

  return (
    <section>
      <h1 style={{ margin: "5% 0 5% 5%" }}>Cart</h1>
      <div style={{ marginLeft: "5%" }}>
        {/* <ItemList items={items} /> */}
        <IngredientList
          ingredients={loadedIngredients}
          ingredientChecked={ingredientChecked}
        ></IngredientList>
      </div>
    </section>
  );
}

export default Cart;
