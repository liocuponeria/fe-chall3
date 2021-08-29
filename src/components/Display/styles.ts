import styled from 'styled-components'

export const Container = styled.div`
  > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    @media (min-width: 468px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      > div:nth-child(2) {
        max-width: 240px;
      }
    }

    @media (min-width: 720px) {
      > div:nth-child(2) {
        max-width: 328px;
      }
    }

    > span {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 3rem;
      color: ${props => props.theme.colors.neutral.darkestGray};
      text-align: center;

      opacity: 0.9;
    }

    > div:nth-child(2) {
      margin-top: 12px;
      width: 100%;
    }
  }

  > div.products {
    display: grid;
  }
`
