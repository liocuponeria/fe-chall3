import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div:first-of-type {
    width: 100%;

    > img {
      width: 100%;

      border-radius: 14px;
    }
  }

  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 23px;

    > div:first-child {
      display: flex;
      flex-direction: column;

      > h3 {
        font-size: 2.2rem;
        font-weight: 700;
        line-height: 2.5rem;
        color: ${props => props.theme.colors.neutral.darkestGray};
      }

      > span {
        margin-top: 8px;

        font-size: 3rem;
        font-weight: 700;
        line-height: 2.5rem;
        color: ${props => props.theme.colors.highlight.green};
      }

      p {
        margin-top: 10px;

        font-size: 1.6rem;
        line-height: 2rem;
        color: ${props => props.theme.colors.neutral.darkestGray};
      }
    }

    > button:nth-child(2) {
      align-self: center;
      margin-top: 20px;
    }
  }

  @media (min-width: 416px) {
    div:nth-of-type(2) {
      > button:nth-child(2) {
        margin-top: 40px;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    height: 100%;
    max-height: 310px;

    div:first-of-type {
      width: auto;
      height: 100%;

      > img {
        width: auto;
        height: 100%;
      }
    }

    div:nth-of-type(2) {
      margin-top: 0;
      margin-left: 20px;

      > button:nth-child(2) {
        align-self: flex-start;
      }
    }
  }
`
