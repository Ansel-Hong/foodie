import React from 'react'

export default function Item({item}) {


    console.log(item);

    const amountStyle = {
        left: "200px",
        position: "fixed"
    }

    const divStyle = {
        paddingTop: "10px",
        paddingLeft: "10px"
    }
    return (
        <div key = {item.id} style = {divStyle}>
            <label>
                {item.name}
            </label>
            <label style={amountStyle}>
            x{item.amount}
            </label>
        </div>
    )
}
