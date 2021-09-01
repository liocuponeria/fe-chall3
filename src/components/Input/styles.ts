import styled from 'styled-components'

interface ContainerProps {
  error: boolean
}

export const Container = styled.div<ContainerProps>`
  height: 56px;

  background: ${props => props.theme.colors.neutral.white};
  padding: 17px 20px 19px 15px;

  border: 1px solid ${props => props.theme.colors.neutral.darkerGray};
  border-radius: 4px;

  transition: all 0.1s;

  &:hover,
  &:active {
    border: 1px solid ${props => props.theme.colors.neutral.darkestGray};
  }

  ${({ error }) => error && 'border: 1px solid #ffa401;'}

  > input {
    background: ${props => props.theme.colors.neutral.white};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.neutral.darkestGray};

    border: none;
    outline: none;

    &::placeholder {
      color: ${props => props.theme.colors.neutral.darkerGray};
      opacity: 1;
    }
  }
`
