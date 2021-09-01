import React from 'react'

import Button from '../Button'

import { Container } from './styles'

const Product: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <Container className={className}>
      <div>
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
      </div>
      <div>
        <div>
          <h3>Boné Bordado Harry Potter Grifinoria</h3>
          <span>R$30,00</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            necessitatibus similique molestias quis minima maxime. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Magnam veritatis
            corrupti fugiat, hic molestias odit?
          </p>
        </div>
        <Button text="Adicionar ao carrinho" />
      </div>
    </Container>
  )
}

export default Product
