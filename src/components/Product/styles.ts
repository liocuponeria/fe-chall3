import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 350px;

  border: 1px solid #00000026;
  border-radius: 14px;

  box-shadow: 0px 4px 10px #0000001f;
  transition: all 0.15s;

  &:hover {
    box-shadow: 0px 6px 12px #0000001f;
  }

  > a {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    > img:first-child {
      height: 204px;

      border-radius: 14px 14px 0 0px;
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      margin: 12px 14px 26px 14px;

      height: 100%;

      > div:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;

        > h3,
        > span {
          text-align: center;
        }

        > h3 {
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 1.9rem;
          color: ${props => props.theme.colors.neutral.darkestGray};
        }

        > span {
          margin-top: 10px;

          font-size: 2.2rem;
          font-weight: 700;
          line-height: 2.5rem;
          color: ${props => props.theme.colors.neutral.darkestGray};
        }
      }
    }
  }
`
