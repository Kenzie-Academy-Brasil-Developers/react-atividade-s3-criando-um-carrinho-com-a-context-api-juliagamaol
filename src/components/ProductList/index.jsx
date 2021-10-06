import './index.css'
import React, { useContext } from 'react'
import { CartContext } from '../../Providers/cart'
import { CatalogueContext } from '../../Providers/catalogue'
import Button from '../Button'

export default function ProductList({type}) {
        const {catalogue} = useContext(CatalogueContext)
        const {cart} = useContext(CartContext)

    return (
        <ul>
            {type === 'catalogue' && 
                catalogue.map((item,index)=>(
                    <li key={index}>
                        {item.name} <Button type={type} item={item} />
                    </li>
                ))}

            {type === "cart" &&
                cart.map((item, index) => (
                    <li key={index}>
                        {item.name} <Button type={type} item={item} />
                    </li>
                ))}
        </ul>
    )
}
