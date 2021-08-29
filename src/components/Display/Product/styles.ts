import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid #00000026;
  border-radius: 14px;

  box-shadow: 0px 4px 10px #0000001f;
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0px 4px 10px #cccccc;
  }

  > a {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    > img:first-child {
      height: 204px;

      object-fit: cover;

      border-radius: 14px 14px 0 0px;

      @media (min-width: 468px) {
        height: 136px;
      }

      @media (min-width: 550px) {
        height: 155px;
      }

      @media (min-width: 614px) {
        height: 170px;
      }

      @media (min-width: 826px) {
        height: 150px;
      }

      @media (min-width: 1024px) {
        height: 160px;
      }

      @media (min-width: 1330px) {
        height: 170px;
      }

      @media (min-width: 1480px) {
        height: 204px;
      }
    }

    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      margin: 12px 14px 26px 14px;

      height: 100%;

      @media (min-width: 468px) {
        margin: 12px 14px 18px 14px;
      }

      @media (min-width: 550px) {
        margin: 12px 14px 26px 14px;
      }

      @media (min-width: 826px) {
        margin: 12px 14px 18px 14px;
      }

      @media (min-width: 1080px) {
        margin: 12px 14px 26px 14px;
      }

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
          text-align: center;
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
