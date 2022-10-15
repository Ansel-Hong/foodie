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
      <div>
        <img src={recipes[i].pic} width='33%'/> {/* //? image of recipe */}
        <div>
          <h2>{recipes[i].name}</h2> {/* //? name of recipe */}
          <p>{recipes[i].discription}</p> {/* //? small discription of the recipe */}
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