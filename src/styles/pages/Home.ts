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
export const StyledDisplay = styled(Display)`
  grid-area: display;
  margin: 18px 4.5% 40px 4.5%;

  @media (min-width: 826px) {
    margin-top: calc(55px + 18px);
  }

  > div.products {
    grid-template-columns: 1fr;
    ${({ products }) =>
      products?.length &&
      `grid-template-rows: repeat(${products?.length}, 350px);`}
    grid-column-gap: 16px;
    grid-row-gap: 20px;

    margin-top: 20px;

    @media (min-width: 468px) {
      grid-template-columns: repeat(2, 1fr);
      ${({ products }) =>
        products?.length &&
        `grid-template-rows: repeat(${products?.length / 2}, 290px);`}
    }

    @media (min-width: 550px) {
      ${({ products }) =>
        products?.length &&
        `grid-template-rows: repeat(${products?.length / 2}, 310px);`}
    }

    @media (min-width: 720px) {
      ${({ products }) =>
        products?.length &&
        `grid-template-rows: repeat(${products?.length / 2}, 320px);`}
    }

    @media (min-width: 826px) {
      grid-template-columns: repeat(3, 1fr);
      ${({ products }) =>
        products?.length &&
        `grid-template-rows: repeat(${products?.length / 3}, 300px);`}
    }

    @media (min-width: 1080px) {
      ${({ products }) =>
        products?.length &&
        `grid-template-rows: repeat(${products?.length / 3}, 300px);`}
    }

    @media (min-width: 1240px) {
      grid-template-columns: repeat(4, 1fr);
      ${({ products }) =>
        products?.length &&
        `grid-template-rows: repeat(${Math.ceil(
          products?.length / 4
        )}, 320px);`}
    }
    @media (min-width: 1480px) {
      ${({ products }) =>
        products?.length &&
        `grid-template-rows: repeat(${Math.ceil(
          products?.length / 4
        )}, 350px);`}
    }
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
