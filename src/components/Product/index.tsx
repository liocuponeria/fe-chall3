import React from 'react'
import Link from 'next/link'

import Button from '../Button'

import { Container } from './styles'

const Product: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
          <div>
            <div>
              <h3>Boné Bordado Harry Potter Grifinoria</h3>
              <span>R$30,00</span>
            </div>
            <Button text="Ver produto" />
          </div>
        </a>
      </Link>
    </Container>
  )
}

export default Product
