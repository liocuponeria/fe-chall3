import React, { createContext, ReactNode, useState } from 'react'

import CartType from '../types/Cart'
import ProductType from '../types/Product'

interface CartContextData {
  cart: CartType
  addToCart: (product: ProductType) => void
  removeFromCart: (id: number) => void
}

interface CartProviderProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextData)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartType>([])

  const addToCart = (product: ProductType) => {
    const { id, image, title, price } = product
    const productToInsert = { quantity: 1, id, image, title, price }

    let newCart = cart || ([] as CartType)

    if (!cart || cart.length === 0) newCart = [productToInsert]

    let matchingProductIndex = -1

    if (cart.length > 0) {
      matchingProductIndex = cart.findIndex(
        cartProduct => cartProduct.id === product.id
      )
    }

    if (matchingProductIndex >= 0) {
      newCart[matchingProductIndex] = {
        ...productToInsert,
        quantity: newCart[matchingProductIndex].quantity + 1
      }
    }

    if (matchingProductIndex < 0 && cart.length > 0) {
      newCart.push(productToInsert)
    }

    setCart(newCart)
  }

  const removeFromCart = (id: number) => {
    const newCart = cart.filter(product => product.id !== id)

    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
