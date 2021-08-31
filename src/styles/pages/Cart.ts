import styled from 'styled-components'

import Header from '../../components/Header'
import Cart from '../../components/Cart'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55px 1fr 120px;

  grid-template-areas:
    'header'
    'cart'
    'footer';

  position: relative;

  @media (min-width: 486px) {
    grid-template-rows: 60px 1fr 120px;
  }

  @media (min-width: 720px) {
    grid-template-rows: 80px 1fr 120px;
  }

  @media (min-width: 1024px) {
    grid-template-rows: 100px 1fr 120px;
  }
`

export const StyledHeader = styled(Header)`
  grid-area: header;
`
export const StyledCart = styled(Cart)`
  grid-area: cart;
  justify-self: center;

  margin: 12px 16px 48px 16px;

  width: 100%;

  @media (min-width: 826px) {
    margin-top: calc(55px + 32px);
  }

  @media (min-width: 1260px) {
    width: calc(100% - 120px);
  }
`

export const StyledFooter = styled(Footer)`
  grid-area: footer;

  @media (max-width: 826px) {
    margin-bottom: -55px;
  }
`

export const StyledNavBar = styled(NavBar)`
  position: fixed;
  bottom: 0;

  height: 55px;

  @media (min-width: 826px) {
    position: absolute;
    top: 80px;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 100px;

    height: 60px;
  }
`
