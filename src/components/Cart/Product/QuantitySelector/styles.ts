import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 120px;

  svg {
    width: 20px;
    height: 20px;

    color: ${props => props.theme.colors.neutral.darkestGray};

    cursor: pointer;
  }

  > input {
    margin: 0 6px;

    max-width: 53px;
    height: 25px;

    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: ${props => props.theme.colors.neutral.darkerGray};
    text-align: center;

    border: none;
    border-radius: 4px;
    outline: none;
    box-shadow: 0px 3px 6px #00000029;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    & {
      -moz-appearance: textfield;
    }
  }
`
