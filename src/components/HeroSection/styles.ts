import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    overflow: hidden;
    padding: 40px 16px;
    background-color: ${theme.colors.white};
    min-height: 475px;

    @media (min-width: 1024px) {
      padding: 60px ${theme.spacings.xlarge};
      min-height: 475px;
    }
  `}
`;

export const BackgroundBlur = styled.div`
  ${() => css`
    position: absolute;
    top: -94px;
    left: 30px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: #d4ffd1;
    filter: blur(200px);
    opacity: 0.5;
    pointer-events: none;
    z-index: 0;

    @media (min-width: 1024px) {
      top: -472px;
      left: -77px;
      width: 696px;
      height: 696px;
      filter: blur(400px);
      opacity: 1;
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
    flex-direction: column;
    gap: 24px;
    height: fit-content;
    z-index: 1;

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-start;
      gap: 24px;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 400px;
    text-align: center;
    color: ${theme.colors.black};
    margin: 0 auto;

    @media (min-width: 1024px) {
      max-width: 473px;
      text-align: left;
      margin: 0;
    }
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-family: "Poppins", ${theme.font.family};
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.01em;
    color: #1e2124;
    margin: 0;
    width: 100%;

    @media (min-width: 1024px) {
      font-size: 36px;
      line-height: 1.2;
      max-width: 473px;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: 36px;
    font-family: "Inter", ${theme.font.family};
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #41484e;
    width: 100%;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1024px) {
      margin-top: 18px;
      margin-left: 0;
      margin-right: 0;
      max-width: 376px;
    }
  `}
`;

export const Actions = styled.div`
  ${({ theme }) => css`
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;

    @media (min-width: 1024px) {
      margin-top: 31px;
      gap: 16px;
      width: auto;

      button {
        width: auto;
      }
    }
  `}
`;

export const ButtonWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;

    button {
      width: 100%;
    }

    @media (min-width: 1024px) {
      flex-direction: row;
      width: auto;
    }
  `}
`;

export const CrcText = styled.span`
  ${({ theme }) => css`
    display: block;
    font-family: "Inter", ${theme.font.family};
    font-weight: 500;
    font-size: 12px;
    line-height: 1.67;
    color: #1e2124;
    text-align: center;

    @media (min-width: 1024px) {
      text-align: left;
    }
  `}
`;

export const SideIllustration = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.large};
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 1024px) {
      width: 476px;
      max-width: 476px;
      margin-top: 0;
      margin-left: 0;
      margin-right: 0;
      flex-shrink: 0;
    }
  `}
`;

export const IllustrationCard = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 400px;
    height: 224.64px;
    border-radius: 30px;
    background: ${theme.colors.greyLight};
    object-fit: cover;

    @media (min-width: 1024px) {
      max-width: 476px;
      height: 326px;
    }
  `}
`;
