import styled from 'styled-components'

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 35px;

  > div:first-child {
    width: 20%;
  }

  > div {
    display: flex;
    align-items: center;

    width: 40%;
    height: 100%;

    position: relative;

    //The circle
    > div:nth-child(2) {
      width: 35px;
    }
  }

  > div.active {
    //The Bar
    > div:first-child {
      background: linear-gradient(to right, #24c92b, #099f0f);
    }

    //The Circle
    > div:nth-child(2) {
      background: linear-gradient(to left, #24c92b, #099f0f);
    }
  }
`

export const Bar = styled.div`
  width: 100%;
  height: 5px;

  background: #b2b2b2;
`

export const Circle = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  background: #b2b2b2;

  border-radius: 50%;

  > span {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 100%;
    color: ${props => props.theme.colors.neutral.white};
  }
`