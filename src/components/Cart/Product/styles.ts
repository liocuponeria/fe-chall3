import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px 15px 30px 19px;

  border: 1px solid #00000026;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0px 6px 12px #0000001f;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 4px 10px #cccccc;

    > div:first-of-type {
      > div:nth-child(2) {
        > h3 {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media (min-width: 1260px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 27px 18px 27px 11px;
  }

  > div:first-of-type {
    display: flex;

    max-height: 90px;

    > img {
      width: 140px;
      height: 100%;

      border-radius: 14px;

      @media (min-width: 1260px) {
        margin-bottom: 145px;
      }
    }

    > div:nth-child(2) {
      display: flex;
      align-items: center;

      margin-left: 16px;

      > h3 {
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: ${props => props.theme.colors.neutral.darkerGray};
      }
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    align-items: center;

    margin-top: 40px;

    @media (min-width: 1260px) {
      margin-top: 0;

      > div:first-child {
        margin-left: 21px;
      }

      > div:nth-child(2) {
        flex-direction: row-reverse;

        > svg {
          margin-left: 28px;
        }

        > span {
          margin-left: 28px;
        }
      }
    }

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 18px;

      width: 100%;

      > svg {
        width: 20px;
        height: 20px;
        color: ${props => props.theme.colors.neutral.darkestGray};

        cursor: pointer;
      }

      > span {
        font-size: 2.2rem;
        font-weight: 700;
        color: ${props => props.theme.colors.highlight.green};
      }
    }
  }
`
