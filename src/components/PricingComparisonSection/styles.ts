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
    position: relative;
    margin: 0 auto;
    max-width: 976px;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: ${theme.spacings.large};

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: center;
      gap: ${theme.spacings.xlarge};
    }
  `}
`;

export const ImageWrapper = styled.div`
  ${() => css`
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (min-width: 1024px) {
      width: 476px;
      max-width: 476px;
    }
  `}
`;

export const Image = styled.img`
  ${() => css`
    width: 100%;
    height: 215px;
    border-radius: 30px;
    object-fit: cover;

    @media (min-width: 1024px) {
      height: 326px;
      border-radius: 30px;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 400px;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      max-width: 420px;
      text-align: left;
      flex: 1;
    }
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
    margin: 0;

    @media (min-width: 1024px) {
      font-size: 36px;
      line-height: 1.2;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    font-family: "Inter", ${theme.font.family};
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
    color: #41484e;
    margin-bottom: 0;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  `}
`;
