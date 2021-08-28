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
  margin: 18px 16px 30px 16px;
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
