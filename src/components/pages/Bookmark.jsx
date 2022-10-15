let numberOfBookmarks = 10; // TODO: this is a hardcoded value. Should fetched from database?
const recipes = [];

fetch("https://htv7-96f00-default-rtdb.firebaseio.com/recipe.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    for (const key in data) {
      const recipe = {
        id: key,
        ...data[key],
      };
      recipes.push(recipe);
    }
  });

function Bookmark() {
  let recipeList = [];
  for (let i = 0; i < recipes.length; i++) {
    recipeList.push(
      <div className="d-flex card" key={i} style={{ margin: '5%', flexDirection: "row", alignItems: "center", padding: "1% 5%" }}>
          <div className="col-sm" style={{ width: "30%", height: "100px",}}>
            <img src={recipes[i].pic} style={{width: "100px", height: "100px",objectFit: "cover"}} /> {/* //? image of recipe */}
          </div>
              
          <div  className="col-sm" style={{  width: "65%", marginLeft: '5%'}}>
            <h2 style={{ fontSize: "125%" }}>{recipes[i].name}</h2> {/* //? name of recipe */}
            <p style={{ fontSize: "80%" }}>{recipes[i].discription}</p> {/* //? small discription of the recipe */}
          </div>
      </div>
    );
  }
  return <section>
    <h1>Bookmark recipes</h1>
    {recipeList}
  </section>;
}

export default Bookmark;