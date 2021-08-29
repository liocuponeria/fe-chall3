import styled from 'styled-components'

import Header from '../../components/Header'
import Display from '../../components/Display'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 55px 1fr 120px;

  grid-template-areas:
    'header'
    'display'
    'footer';

  position: relative;
`

export const StyledHeader = styled(Header)`
  grid-area: header;
`
export const StyledDisplay = styled(Display)`
  grid-area: display;
  margin: 18px 4.5% 30px 4.5%;

  > div.products {
    grid-template-columns: 1fr;
    ${({ productsQuantity }) =>
      productsQuantity &&
      `grid-template-rows: repeat(${productsQuantity / 2}, 350px);`}
    grid-column-gap: 16px;
    grid-row-gap: 20px;

    margin-top: 20px;

    @media (min-width: 468px) {
      grid-template-columns: repeat(2, 1fr);
      ${({ productsQuantity }) =>
        productsQuantity &&
        `grid-template-rows: repeat(${productsQuantity / 2}, 290px);`}
    }

    @media (min-width: 550px) {
      ${({ productsQuantity }) =>
        productsQuantity &&
        `grid-template-rows: repeat(${productsQuantity / 2}, 310px);`}
    }

    @media (min-width: 720px) {
      ${({ productsQuantity }) =>
        productsQuantity &&
        `grid-template-rows: repeat(${productsQuantity / 2}, 320px);`}
    }

    @media (min-width: 826px) {
      grid-template-columns: repeat(3, 1fr);
      ${({ productsQuantity }) =>
        productsQuantity &&
        `grid-template-rows: repeat(${productsQuantity / 2}, 300px);`}
    }

    @media (min-width: 1080px) {
      ${({ productsQuantity }) =>
        productsQuantity &&
        `grid-template-rows: repeat(${productsQuantity / 2}, 300px);`}
    }

    @media (min-width: 1240px) {
      grid-template-columns: repeat(4, 1fr);
      ${({ productsQuantity }) =>
        productsQuantity &&
        `grid-template-rows: repeat(${productsQuantity / 2}, 320px);`}
    }

    @media (min-width: 1480px) {
      ${({ productsQuantity }) =>
        productsQuantity &&
        `grid-template-rows: repeat(${productsQuantity / 2}, 350px);`}
    }
  }
`

export const StyledFooter = styled(Footer)`
  grid-area: footer;

  margin-bottom: -55px;
`

export const StyledNavBar = styled(NavBar)`
  position: sticky;
  bottom: 0;

  height: 55px;
`
