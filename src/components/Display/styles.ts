import styled from 'styled-components'

export const Container = styled.div`
  > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > span {
      font-size: 2.2rem;
      font-weight: 700;
      line-height: 3rem;
      color: ${props => props.theme.colors.neutral.darkestGray};
      text-align: center;

      opacity: 0.9;
    }
  }

  > div:nth-of-type(2) {
    margin-top: 12px;
  }

  > div.products {
    margin-top: 20px;

    > div {
      margin-top: 20px;
    }
  }
`
