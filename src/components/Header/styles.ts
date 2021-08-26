import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 55px;

  background-image: linear-gradient(to right, #ff0000, #fb135f, #f91e96);

  > :first-child {
    display: inline-flex;
    align-items: center;

    svg {
      margin-left: -20px; //to compensate svg's extra width

      height: 25px;
    }
  }
`
