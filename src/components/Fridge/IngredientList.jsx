import React from 'react'
import Ingredient from './Ingredient'

export default function ReceipeList({ingredients, ingredientChecked}) {
    return (
        ingredients.map(ingredient => {
           return <Ingredient key = {ingredient.id} ingredient = {ingredient} ingredientChecked={ingredientChecked}/>
        })
    )
}
