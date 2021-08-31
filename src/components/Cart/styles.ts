import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 330px;

  @media (min-width: 1260px) {
    max-width: 100%;

    > div:nth-child(2) {
      flex-direction: row;

      > div:nth-child(2) {
        margin-top: 0;
        margin-left: 16px;
      }
    }
  }

  > span:first-child {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 3rem;
    color: ${props => props.theme.colors.neutral.darkestGray};
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    @media (min-width: 1260px) {
      flex-direction: row;

      > div:nth-child(2) {
        max-width: 330px;
      }
    }

    > div:first-child {
      margin-top: 15px;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 100%;

      margin-top: 17px;

      padding: 21px 12px 28px 12px;

      border: 1px solid #00000026;
      border-radius: 14px;
      box-shadow: 0px 6px 12px #0000001f;

      > span {
        font-size: 3rem;
        font-weight: 700;
        color: ${props => props.theme.colors.highlight.green};
      }

      > button {
        margin-top: 24px;

        width: 100%;
      }
    }
  }
`
