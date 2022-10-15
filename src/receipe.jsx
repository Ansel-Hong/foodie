import React from 'react'

export default function receipe({receipe}) {
    const image = {
        height: "200px",
        width: "200px"
    }

    const receipestyle = {
        position: "absolute"
    }
    return (
        <div>
            <h1>Receipe List</h1>
            <img src = {receipe.urlPic} style={image}></img>
            <h1 style={receipestyle}>{receipe.name}</h1>
        </div>
    )
}
