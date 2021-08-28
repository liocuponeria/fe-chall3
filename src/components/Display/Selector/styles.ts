import styled from 'styled-components'

interface ContainerProps {
  isOpen: boolean
}

interface OptionsProps {
  areVisible: boolean
  quantity: number
}

export const Container = styled.div<ContainerProps>`
  height: 56px;

  border: 1px solid ${props => props.theme.colors.highlight.pink};
  border-radius: 4px;

  cursor: pointer;

  position: relative;

  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    padding: 18px 12px;

    > input:first-child {
      border: none;
      outline: none;
      cursor: default;

      background: none;

      font-family: Roboto, sans-serif;
      font-size: 1.6rem;
      font-weight: 700;
      color: ${props => props.theme.colors.highlight.pink};

      overflow-y: visible;

      &::placeholder {
        font-size: 1.6rem;
        font-weight: 400;
        color: ${props => props.theme.colors.neutral.darkestGray};

        opacity: 0.9;
      }
    }

    > svg:nth-child(2) {
      width: 18px;
      height: 18px;
      color: ${props => props.theme.colors.neutral.darkestGray};

      transition: transform 0.2s;

      ${({ isOpen }) => isOpen === true && 'transform: rotate(-180deg);'}
    }
  }
`

export const Options = styled.div<OptionsProps>`
  position: absolute;
  bottom: ${({ quantity }) => `calc((-${quantity} * 51px) - 1px)`};

  width: 100%;

  visibility: hidden;
  opacity: 0;
  transition: all 0.15s;

  ${({ areVisible }) =>
    areVisible === true &&
    `
  visibility: visible;
  opacity: 1;
  `}

  > div {
    display: flex;
    align-items: center;

    width: 100%;
    height: 51px;

    padding: 15px 16px;
    background: ${props => props.theme.colors.neutral.white};

    border-bottom: 1px solid rgba(249, 30, 150, 0.2);

    &:hover {
      border-bottom: 1px solid rgba(249, 30, 150, 0.4);

      > span {
        color: ${props => props.theme.colors.neutral.black};
      }
    }

    > span {
      font-size: 1.6rem;
      line-height: 2.4rem;
      color: ${props => props.theme.colors.neutral.darkestGray};

      opacity: 0.9;
    }
  }
`
