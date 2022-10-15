import React from 'react'
import Receipe from './receipe'

export default function List({receipes}) {
    return (
        receipes.map(receipe => {
            return <Receipe key = {receipe.id} receipe = {receipe} />
        })
    )
}
