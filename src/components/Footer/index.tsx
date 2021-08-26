import React from 'react'
import Link from 'next/link'

import Face from '../../assets/images/face.svg'
import Instagram from '../../assets/images/insta.svg'
import Twitter from '../../assets/images/twitter.svg'
import Youtube from '../../assets/images/youtube.svg'

import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="https://Instagram.com" rel="noreferrer" target="_blank">
          <Face />
        </a>
        <a href="https://Instagram.com" rel="noreferrer" target="_blank">
          <Instagram />
        </a>
        <a href="https://Instagram.com" rel="noreferrer" target="_blank">
          <Twitter />
        </a>
        <a href="https://Instagram.com" rel="noreferrer" target="_blank">
          <Youtube />
        </a>
      </div>
    </Container>
  )
}

export default Footer
