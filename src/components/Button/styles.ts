import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 304px;
  height: 36px;

  background: linear-gradient(to bottom, #24c92b, #099f0f);

  border: none;
  border-radius: 18px;

  box-shadow: 0px 3px 6px #00000029;
  transition: all 0.1s;

  &:hover {
    filter: brightness(0.95);
    box-shadow: 0px 2px 6px #00000029;
  }

  &:active {
    filter: brightness(0.9);
  }

  > :first-child {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3.6rem;
    color: #ffffff;
  }
`
