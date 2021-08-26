import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100px;

  padding: 32px;
  background-image: linear-gradient(to bottom, #ff0000, #f91e96);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > a {
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`
