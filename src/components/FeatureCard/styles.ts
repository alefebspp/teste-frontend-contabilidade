import styled, { css } from "styled-components";

type Variant = "white" | "grayLight" | "gray" | "greenLight" | "green";

const variantBg: Record<Variant, string> = {
  white: "#FFFFFF",
  grayLight: "#E6E7E8",
  gray: "#C6C8CB",
  greenLight: "#CFFFCB",
  green: "#7BEA6E",
};

export const Card = styled.div<{ $variant: Variant; $index?: number }>`
  ${({ theme, $variant, $index }) => css`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    gap: 16px;
    padding: 20px 24px;
    width: 100%;
    min-height: 180px;
    background-color: ${variantBg[$variant]};
    text-align: left;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;
    margin-top: -15px;

    &:first-child {
      margin-top: 0;
      justify-content: center;
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      z-index: ${$index};
      border-bottom-right-radius: 15px;
      border-top-left-radius: 0px;
      justify-content: flex-end;
      gap: 66px;
      padding: 24px 28px;
      min-height: 128px;

      &:first-child {
        justify-content: flex-end;
        border-top-right-radius: 24px;
      }
    }
  `}
`;

export const IconWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    color: #1e2124;

    @media (min-width: 1024px) {
      width: 42px;
      height: 42px;
    }

    > svg {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: "Inter", ${theme.font.family};
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #1e2124;
    margin: 0;

    @media (min-width: 1024px) {
      font-size: 16px;
      line-height: 1.5;
      width: 65%;
    }
  `}
`;
