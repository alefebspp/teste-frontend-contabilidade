import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 40px 16px;
    background-color: #f6f6f6;

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
    gap: 40px;

    @media (min-width: 1024px) {
      gap: 60px;
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
    text-align: center;
    max-width: 326px;
    width: 100%;
    margin: 0;

    @media (min-width: 1024px) {
      font-size: 36px;
      line-height: 1.2;
      max-width: 535px;
    }
  `}
`;

export const FeaturesGrid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
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
    order: 2;
    flex-shrink: 0;
    z-index: 2;

    @media (min-width: 1024px) {
      width: 476px;
      max-width: 476px;
      order: 0;
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
      border-radius: 50px;
      height: 580px;
      width: 476px;
    }
  `}
`;

export const FeaturesList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 0;
    order: 1;
    border-radius: 0px 0px 24px 24px;
    overflow: hidden;
    z-index: 1;
    margin-top: -15px;

    @media (min-width: 1024px) {
      border-radius: 0px 24px 24px 0px;
      margin-left: -42px;
      margin-top: 0px;
      flex: 1;
      order: 1;
      max-width: 620px;
      width: 620px;
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0;

    @media (min-width: 1024px) {
      margin-top: 0;
    }

    button {
      width: 100%;
      max-width: 400px;

      @media (min-width: 1024px) {
        width: auto;
        max-width: none;
      }
    }
  `}
`;
