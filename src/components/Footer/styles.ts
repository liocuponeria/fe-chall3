import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: flex-start;

  width: 100%;

  padding: 40px 32px 0 32px;
  background-image: linear-gradient(to bottom, #ff0000, #f91e96);

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > a {
      &:hover {
        filter: brightness(0.75);
      }

      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`
