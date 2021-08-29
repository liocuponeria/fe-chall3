import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding: 12px 15px;
  background: ${props => props.theme.colors.neutral.white};

  box-shadow: 0px -3px 6px #00000029;

  > a {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;

    transition: all 0.05s;

    &:hover {
      filter: brightness(0.75);
    }

    &:active {
      filter: brightness(0.6);
    }

    > h2 {
      font-size: 1.2rem;
      color: ${props => props.theme.colors.neutral.gray};
    }

    > svg {
      width: 18px;
      height: 18px;

      color: ${props => props.theme.colors.neutral.gray};
    }
  }

  @media (min-width: 416px) {
    padding: 12px 25px;
  }

  @media (min-width: 826px) {
    padding: 18px 130px 21px 130px;

    box-shadow: 0px 3px 6px #00000029;

    > a {
      flex-direction: row-reverse;

      &:first-child {
        > svg {
          margin-top: -4.5px;
        }
      }

      > h2 {
        font-size: 1.6rem;
        color: ${props => props.theme.colors.neutral.darkestGray};
      }

      > svg {
        margin-top: -2px;
        margin-right: 5px;

        color: ${props => props.theme.colors.neutral.darkestGray};
      }
    }
  }
`
