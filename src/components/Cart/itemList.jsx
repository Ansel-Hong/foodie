import React from 'react'
import Item from './item'



export default function ItemList({items}) {

    return (
        items.map(item => {
           return <Item key = {item.id} item={item}/>
        })
    )
}
