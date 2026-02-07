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
    gap: ${theme.spacings.xlarge};

    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: start;
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
    margin: 0;

    @media (min-width: 1024px) {
      font-size: 36px;
      line-height: 1.2;
      min-width: 373px;
      text-align: left;
    }
  `}
`;

export const CarouselWrapper = styled.div`
  ${() => css`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .swiper {
      width: 100%;
      padding-bottom: 0;
    }

    .swiper-wrapper {
      @media (min-width: 1024px) {
        width: 580px;
      }

      @media (min-width: 1440px) {
        width: 700px;
      }
    }

    .swiper-slide {
      @media (min-width: 1024px) {
        width: 276px;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    @media (min-width: 1024px) {
      align-items: start;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: 30px;
    padding: ${theme.spacings.large};
    min-height: 294px;
    height: 100%;
    width: 276px;
    max-width: 276px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
    flex-shrink: 0;

    @media (min-width: 1024px) {
      margin: 0;
    }
  `}
`;

export const IconWrapper = styled.div`
  ${() => css`
    width: 42px;
    height: 38px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-shrink: 0;

    svg {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: "Poppins", ${theme.font.family};
    font-weight: 500;
    font-size: 22px;
    line-height: 1.23;
    color: #41484e;
    margin: 0;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: "Inter", ${theme.font.family};
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #000000;
    margin: 0;
    flex: 1;
  `}
`;

export const NavigationWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: ${theme.spacings.large};

    > :first-child img {
      transform: rotate(180deg);
    }

    @media (max-width: 1023px) {
      display: none;
    }
  `}
`;

export const NavButton = styled.button`
  ${() => css`
    width: 76px;
    height: 76px;
    border: 1px solid black;
    border-radius: 50px;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  `}
`;

export const Pagination = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: ${theme.spacings.large};
    width: 100%;

    @media (min-width: 1024px) {
      display: none;
    }

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #c6c8cb;
      opacity: 1;
      border-radius: 50%;
      transition: background 0.3s ease;

      &-active {
        background: #2bbe41;
      }
    }
  `}
`;
