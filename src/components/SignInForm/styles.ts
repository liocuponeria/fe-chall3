import styled from 'styled-components'

interface ContainerProps {
  currentStep: number
}

export const Container = styled.div<ContainerProps>`
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
    margin-top: 12.5px;
  }

  > div:nth-child(3) {
    margin-top: 20px;

    width: 100%;

    > div {
      display: none;

      width: 100%;

      // The inputs
      > div {
        margin-top: 10px;
      }
    }

    ${({ currentStep }) => `
      > div:nth-child(${currentStep}){
        display: block;
      }
    `}
  }

  > div:nth-child(4) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 22.5px;

    width: 100%;

    > button {
      width: 100%;
    }

    > button:nth-child(2) {
      margin-top: 20.5px;
    }
  }

  > p:nth-child(5) {
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
