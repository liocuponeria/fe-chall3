import React from 'react'

import Selector from './Selector'
import Product from './Product'

import { Container } from './styles'

import ProductType from '../../types/Product'

interface DisplayProps {
  products: ProductType[]
  title: string
}

const Display: React.FC<
  DisplayProps & React.HTMLAttributes<HTMLDivElement>
> = ({ className, products, title }) => {
  return (
    <Container className={className}>
      <div>
        {title ? <span>{title}</span> : <span>Sugestões para você</span>}
        <Selector />
      </div>
      <div className="products">
        {products !== null &&
          products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
      </div>
    </Container>
  )
}

export default Display
