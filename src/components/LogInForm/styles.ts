import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 330px;

  > span:first-child {
    font-size: 2.2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.neutral.darkestGray};
  }

  > div:nth-child(2) {
    margin-top: 17.5px;

    width: 100%;

    // The inputs
    > div {
      margin-top: 10px;
      width: 100%;
    }

    > div:first-child {
      margin-top: 0;
    }
  }

  > button {
    margin-top: 22.5px;

    width: 100%;
  }

  > p:nth-child(4) {
    display: inline-flex;
    align-items: center;

    margin-top: 20px;

    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${props => props.theme.colors.neutral.darkerGray};

    > a {
      margin-left: 3px;
    }
  }
`
