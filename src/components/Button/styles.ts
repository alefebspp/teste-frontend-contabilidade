import styled, { css } from 'styled-components'

const buttonBase = css`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 58px;
    border: 1px solid transparent;
    font-family: 'Inter', ${theme.font.family};
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color ${theme.transition.fast},
      color ${theme.transition.fast}, border-color ${theme.transition.fast},
      box-shadow ${theme.transition.fast};

    @media (min-width: 1024px) {
      font-size: 16px;
      padding: 12px 24px;
      height: 46px;
    }
  `}
`

export const PrimaryButton = styled.button`
  ${buttonBase};

  ${({ theme }) => css`
    background-color: #2b7adf;
    color: ${theme.colors.white};
    box-shadow: 0 14px 40px rgba(43, 122, 223, 0.35);

    &:hover {
      background-color: #2568c0;
    }

    &:focus-visible {
      outline: 2px solid #2b7adf;
      outline-offset: 2px;
    }
  `}
`

export const OutlineButton = styled.button`
  ${buttonBase};

  ${() => css`
    background-color: transparent;
    color: #1e2124;
    border-color: #1e2124;

    @media (min-width: 1024px) {
      color: #2b79df;
      border-color: #2b79df;
    }

    &:hover {
      background-color: rgba(30, 33, 36, 0.04);

      @media (min-width: 1024px) {
        background-color: rgba(43, 121, 223, 0.04);
      }
    }

    &:focus-visible {
      outline: 2px solid #1e2124;
      outline-offset: 2px;

      @media (min-width: 1024px) {
        outline-color: #2b79df;
      }
    }
  `}
`
