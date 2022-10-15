import {useEffect, useRef} from 'react'
import IngredientList from "../Fridge/IngredientList"
import { v4 as uuidv4 } from 'uuid'

function FridgeList({ingredients,setIngredients}) {
  const heading = {
    paddingTop: "20px",
    paddingLeft: "20px"
}
  const ingredientNameRef = useRef()
  const localStorageKey = 'FridgeList.ingredients'
  const amountRef = useRef()

  useEffect(() =>{
    const storedIngredients = JSON.parse(localStorage.getItem(localStorageKey))
    if (storedIngredients) setIngredients(storedIngredients)
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(ingredients))
  }, [ingredients])

  function handleAddIngredient(e){
    let name = ingredientNameRef.current.value
    let temp = name.toUpperCase()
    name = temp.substring(0,1) + name.substring(1,name.length)
    const amount = amountRef.current.value
    if (name === '' || amount == '') return
    for(const key in ingredients){
      if(name==ingredients[key].name){
        ingredients[key].amount =  parseFloat(ingredients[key].amount) + parseFloat(amount)
        return setIngredients(prevIngredients => {
          return [...prevIngredients]
        })
    }
  }
    // if (ingredients.includes(name)){
    //   console.log(ingredients.find(name))
    // }
    setIngredients(prevIngredients => {
      return [...prevIngredients, {id: uuidv4(), name: name, complete: false, amount: amount}]
    })
    ingredientNameRef.current.value = null
    amountRef.current.value = null
  }

  function ingredientChecked(id){
    const newIngredients = [...ingredients]
    const ingredient = newIngredients.find(ingredient => ingredient.id === id)
    ingredient.complete = !ingredient.complete
    setIngredients(newIngredients)
  }

  function handleClear(){
    setIngredients([])
  }

  const amountStyle = {
    marginRight: "120px"
  }

  const spanStyle = {
    marginLeft: "10px",
    marginRight: "10px"
  }

    return(<>
    <h1 style={heading}>Ingredient List</h1>
    <div style={{marginLeft: "10px"}}>
      <div className="input-group mb-3">
        <input ref={ingredientNameRef}type="text" placeholder="Ingredient" className="form-control" style={{width:"50px"}}></input>
        <span style={spanStyle}>x</span>
        <input ref={amountRef}type="text" placeholder="Amount" style={amountStyle} className="form-control" ></input>
      </div>
      <div>
        <button onClick={handleAddIngredient} className="btn btn-dark">Add Ingredient</button>
        <button onClick={handleClear} className="btn btn-danger" style={{marginLeft: "10px"}}>Clear Ingredients</button>
      </div>
    </div>
    <IngredientList ingredients = {ingredients} ingredientChecked={ingredientChecked}></IngredientList>
    </>
    )
  }

  
  export default FridgeList;
  