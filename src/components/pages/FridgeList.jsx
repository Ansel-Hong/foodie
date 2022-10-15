import {useState, useEffect, useRef} from 'react'
import IngredientList from "../Fridge/IngredientList"
import { v4 as uuidv4 } from 'uuid'

function FridgeList() {
  const heading = {
    paddingTop: "20px",
    paddingLeft: "20px"
}
  let id = 0
  const [ingredients,setIngredients] = useState([])
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
    const name = ingredientNameRef.current.value
    const amount = amountRef.current.value
    if (name === '' || amount == '') return
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

    return(<>
    <h1 style={heading}>Ingredient List</h1>
    <input ref={ingredientNameRef}type="text"></input>
    <input ref={amountRef}type="text"></input>
    <button onClick={handleAddIngredient}>Add Ingredient</button>
    <button onClick={handleClear}>Clear Ingredients</button>
    <IngredientList ingredients = {ingredients} ingredientChecked={ingredientChecked}></IngredientList>
    </>
    )
  }

  
  export default FridgeList;
  