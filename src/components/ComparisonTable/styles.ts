import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 40px 16px;
    background-color: ${theme.colors.white};

    @media (min-width: 768px) {
      padding: 60px ${theme.spacings.xlarge};
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 976px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xlarge};
  `}
`;

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-family: "Poppins", ${theme.font.family};
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.01em;
    color: #1e2124;
    text-align: center;
    margin: 0;

    @media (min-width: 1024px) {
      font-size: 36px;
      line-height: 1.2;
    }
  `}
`;

export const TableWrapper = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow-x: auto;

    @media (min-width: 1024px) {
      overflow-x: visible;
    }
  `}
`;

export const Table = styled.table`
  ${() => css`
    width: 100%;
    max-width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 30px;
    overflow: hidden;

    @media (max-width: 1023px) {
      display: none;
    }
  `}
`;

export const TableHeader = styled.thead`
  ${() => css``}
`;

export const HeaderCell = styled.th<{ variant?: "highlight" }>`
  ${({ theme, variant }) => css`
    padding: ${theme.spacings.medium};
    font-family: "Manrope", ${theme.font.family};
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: ${variant === "highlight" ? "#000000" : "#41484e"};
    background-color: ${variant === "highlight" ? "#e0e1e2" : "#f5f5f5"};

    &:first-child {
      opacity: 0;
    }

    &:nth-child(2) {
      border-radius: 30px 0 0 0;
    }

    &:last-child {
      border-radius: 0 30px 0 0;
    }
  `}
`;

export const TableBody = styled.tbody`
  ${() => css`
    background-color: #ffffff;
  `}
`;

export const TableRow = styled.tr`
  ${() => css`
    border-bottom: 1px solid #c7c7c7;

    &:first-child > td:first-child {
      border-top-left-radius: 30px;
    }

    & > td {
      border-bottom: 1px solid #c7c7c7;
    }

    &:last-child > td {
      border-bottom: none;
    }

    &:last-child {
      border-bottom: none;
    }
  `}
`;

export const FeatureCell = styled.td`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    font-family: "Manrope", ${theme.font.family};
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
    background-color: #e0e1e2;
    padding-left: ${theme.spacings.large};

    &:first-child {
      background-color: #f5f5f5;
      text-align: center;
    }
  `}
`;

export const ValueCell = styled.td<{ variant?: "highlight" }>`
  ${({ theme, variant }) => css`
    padding: ${theme.spacings.medium};
    font-family: "Inter", ${theme.font.family};
    font-weight: ${variant === "highlight" ? 700 : 500};
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: ${variant === "highlight" ? "#000000" : "#41484e"};
    background-color: ${variant === "highlight" ? "#e0e1e2" : "#f5f5f5"};

    &:last-child {
      border-right: none;
    }
  `}
`;

// Mobile Cards
export const MobileCards = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 328px;

    @media (min-width: 1024px) {
      display: none;
    }
  `}
`;

export const MobileCard = styled.div<{ variant?: "highlight" }>`
  ${({ theme, variant }) => css`
    padding: 16px;
    background-color: ${variant === "highlight" ? "#e0e1e2" : "#f5f5f5"};
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `}
`;

export const MobileCardTitle = styled.h3`
  ${({ theme }) => css`
    font-family: "Manrope", ${theme.font.family};
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
    margin: 0;
    text-align: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #c7c7c7;
  `}
`;

export const MobileCardContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0;
  `}
`;

export const MobileCardRow = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 0;
    border-bottom: 1px solid #c7c7c7;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    &:first-child {
      padding-top: 0;
    }
  `}
`;

export const MobileCardLabel = styled.span`
  ${({ theme }) => css`
    font-family: "Manrope", ${theme.font.family};
    font-weight: 700;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
    text-align: center;
  `}
`;

export const MobileCardValue = styled.span<{
  variant?: "highlight" | "tradicional";
}>`
  ${({ theme, variant }) => css`
    font-family: "Inter", ${theme.font.family};
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: ${variant === "highlight" ? "#000000" : "#41484e"};
    text-align: center;
  `}
`;
