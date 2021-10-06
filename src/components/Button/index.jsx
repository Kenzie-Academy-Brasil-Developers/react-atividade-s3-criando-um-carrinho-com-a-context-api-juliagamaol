import './index.css'
import React, { useContext } from 'react'
import { CartContext } from '../../Providers/cart'
import { CatalogueContext } from '../../Providers/catalogue'

export default function Button({type,item}) {
    const {cart,addToCart,removeFromCart} = useContext(CartContext)
    const{catalogue, addToCatalogue, removeFromCatalogue} = useContext(CatalogueContext)

    const text = type === 'catalogue' ? 'Add to cart' : 'Remove from cart'

    const handleClick = () =>{
        if(type === 'catalogue'){
            removeFromCatalogue(item)
            addToCart(item)
        }else{
            removeFromCart(item);
            addToCatalogue(item)
        }
    }
    
    return <button onClick={handleClick}>{text}</button>
}

