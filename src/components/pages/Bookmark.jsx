import RecipeList from "../store/recipe-context"
import { useContext } from "react";

function Bookmark() {
  const loadedRecipe = useContext(RecipeList).recipeList;

  let recipeList = [];
  for (let i = 0; i < loadedRecipe.length; i++) {
    recipeList.push(
      <div className="d-flex card" key={i} style={{ margin: '5%', flexDirection: "row", alignItems: "center", padding: "1% 5%" }}>
          <div className="col-sm" style={{ width: "30%", height: "100px",}}>
            <img src={loadedRecipe[i].pic} style={{width: "100px", height: "100px",objectFit: "cover"}} /> {/* //? image of recipe */}
          </div>
              
          <div  className="col-sm" style={{  width: "65%", marginLeft: '5%', paddingLeft: "5%"}}>
            <h2 style={{ fontSize: "125%" }}>{loadedRecipe[i].name}</h2> {/* //? name of recipe */}
            <p style={{ fontSize: "80%" }}>{loadedRecipe[i].discription}</p> {/* //? small discription of the recipe */}
          </div>
      </div>
    );
  }
  return <section>
    <h1 style={{margin: "5% 0 5% 5%"}} >Bookmark recipes</h1>
    {recipeList}
  </section>;
}

export default Bookmark;