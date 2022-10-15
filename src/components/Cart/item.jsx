import React from 'react'

export default function Item({item}) {


    console.log(item);

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
            <div className="card-body" >
            <label>
                {" " +item.name}
            </label>
            <label style={amountStyle}>
                x{" " + item.amount}
            </label>
            </div>
        </div>
    )
}
