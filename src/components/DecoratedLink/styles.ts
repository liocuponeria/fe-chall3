import styled from 'styled-components'

export const Container = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.8rem;
  text-decoration: underline;
  color: ${props => props.theme.colors.highlight.pink};

  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    filter: brightness(0.95);
    box-shadow: 0px 2px 6px #00000029;
  }

  &:active {
    filter: brightness(0.9);
  }
`
