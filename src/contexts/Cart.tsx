import React, { createContext, ReactNode, useState } from 'react'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  const [cart, setCart] = useState<CartType>([])

  const addToCart = (product: ProductType) => {
    const { id, image, title, price } = product

    const productToInsert = { quantity: 1, id, image, title, price }
    const newCart = cart || ([] as CartType)

    if (newCart !== []) {
      const matchingProductIndex = newCart.findIndex(
        cartProduct => cartProduct.id === product.id
      )

      if (matchingProductIndex >= 0) {
        newCart[matchingProductIndex] = {
          ...productToInsert,
          quantity: newCart[matchingProductIndex].quantity + 1
        }
      } else {
        newCart.push(productToInsert)
      }
    }

    setCart(newCart)

    router.push('/signin')
  }

  const removeFromCart = (id: number) => {
    const newCart = cart.filter(product => product.id !== id)

    setCart(newCart)

    if (!cart) router.push('/')
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }
