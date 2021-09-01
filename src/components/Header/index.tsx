import React from 'react'
import Link from 'next/link'

import Logo from '../../assets/images/logo.svg'

import { Container } from './styles'

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className
}) => {
  return (
    <Container className={className}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
    </Container>
  )
}

export default Header
