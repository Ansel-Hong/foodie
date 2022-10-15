import React from 'react'

export default function Ingredient({ingredient, ingredientChecked}) {

    function handleIngredientClicked(){
        ingredientChecked(ingredient.id)
    }

    const amountStyle = {
        left: "200px",
        position: "fixed"
    }

    const divStyle = {
        paddingTop: "10px",
        paddingLeft: "10px"
    }
    return (
        <div style = {divStyle}>
        <label>
            <input type="checkbox" checked={ingredient.complete} onChange={handleIngredientClicked}></input>
            {ingredient.name}
        </label>
        <label style={amountStyle}>
        x{ingredient.amount}
        </label>
        </div>
    )
}
