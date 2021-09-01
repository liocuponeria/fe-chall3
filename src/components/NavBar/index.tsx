import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { HiOutlineShoppingCart as Cart } from 'react-icons/hi'

import House from '../../assets/images/inicio.svg'
import Clothes from '../../assets/images/roupas.svg'
import Electronics from '../../assets/images/eletronicos.svg'
import Accessories from '../../assets/images/acessorios.svg'

import { Container } from './styles'

const Home: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  const router = useRouter()
  const { asPath: path } = router

  return (
    <Container className={className}>
      <Link href="/">
        <a className={path === '/' ? 'active' : ''}>
          <h2>Início</h2>
          <House />
        </a>
      </Link>
      <Link href="/products/clothes">
        <a className={path.includes('/clothes') ? 'active' : ''}>
          <h2>Roupas</h2>
          <Clothes />
        </a>
      </Link>
      <Link href="/products/electronics">
        <a className={path.includes('/electronics') ? 'active' : ''}>
          <h2>Eletrônicos</h2>
          <Electronics />
        </a>
      </Link>
      <Link href="/products/acessories">
        <a className={path.includes('/acessories') ? 'active' : ''}>
          <h2>Acessórios</h2>
          <Accessories />
        </a>
      </Link>
      <Link href="/cart">
        <a className={path.includes('/cart') ? 'active' : ''}>
          <h2>Meu carrinho</h2>
          <Cart />
        </a>
      </Link>
    </Container>
  )
}

export default Home
