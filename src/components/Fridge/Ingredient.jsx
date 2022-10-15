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
        marginTop: "10px",
        width: "300px"
    }
    return (
        <div style = {divStyle} className="card">
            <div className="card-body">
            <label>
                {" " +ingredient.name}
            </label>
            <label style={amountStyle}>
                x{" " + ingredient.amount}
            </label>
            </div>
        </div>
    )
}
