import RecipeList from "../store/recipe-context"
import {  useContext  } from "react";
import { Link } from "react-router-dom";

function Bookmark() {
  const recipeContext = useContext(RecipeList);
  const loadedRecipe = useContext(RecipeList).recipeList;
  var recipeList = [];

  function changeCurRecipe(newRecipe) {
    recipeContext.changeRecipe(newRecipe);
  }

  function delBookmark(i) {
    recipeContext.unbookmarkRecipe(i);
      recipeList.splice(i, 1);
  }

  for (let i = 0; i < loadedRecipe.length; i++) {
    if(loadedRecipe[i].isBookmarked == true) {
        recipeList.push (<div className="d-flex card" key={i} style={{ margin: '5%', flexDirection: "row", alignItems: "center", padding: "1% 3%" }} >
            <Link to="/" onClick={() => changeCurRecipe(i)}>
            <div className="col-sm" style={{ width: "30%", height: "100px", }}>
                <img src={loadedRecipe[i].pic} style={{ width: "100px", height: "100px", objectFit: "cover" }} /> {/* //? image of recipe */}
            </div>
            </Link>
            <div className="col-sm" style={{ width: "65%", marginLeft: '5%', paddingLeft: "5%" }}>
            <h2 style={{ fontSize: "125%" }}>{loadedRecipe[i].name}</h2> {/* //? name of recipe */}
            <p style={{ fontSize: "80%", fontFamily: 'Archivo', }} >{loadedRecipe[i].description}</p> {/* //? small description of the recipe */}
            </div>
            <button onClick={() => delBookmark(i)} className="btn btn-danger"><i className="bi bi-trash"></i></button>
        </div>);
    }
  }

return <section>
    <h1 style={{ margin: "5% 0 5% 5%" }} >Bookmark recipes</h1>
    { recipeList}
  </section>;
}

export default Bookmark;