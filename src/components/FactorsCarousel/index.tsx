import { useRef } from "react";

import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import * as S from "./styles";

const FactorsCarousel = () => {
  const swiperRef = useRef<SwiperType>();
  const factors = [
    {
      src: "/svg/aperto_maos.svg",
      title: "Regime tributário",
      description: "Simples Nacional, Lucro Presumido ou Lucro Real.",
      alt: "Ícone de aperto de mãos representando o regime tributário",
    },
    {
      src: "/svg/mao_coracao.svg",
      title: "CNAE/atividade",
      description: "Algumas atividades exigem mais obrigações acessórias.",
      alt: "Ícone de mão com coração representando o CNAE/atividade",
    },
    {
      src: "/svg/porquinho.svg",
      title: "Faturamento anual",
      description: "Quanto maior o volume, mais complexa a gestão.",
      alt: "Ícone de porquinho representando o faturamento anual",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Heading>Fatores que determinam quanto você vai pagar</S.Heading>

        <S.CarouselWrapper>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView="auto"
            centeredSlides={false}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: "auto",
              },
            }}
          >
            {factors.map((factor, index) => (
              <SwiperSlide key={index}>
                <S.Card>
                  <S.IconWrapper>
                    <img src={factor.src} alt={factor.alt} />
                  </S.IconWrapper>
                  <S.Title>{factor.title}</S.Title>
                  <S.Description>{factor.description}</S.Description>
                </S.Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <S.NavigationWrapper>
            <S.NavButton
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Slide anterior"
            >
              <img src="/svg/chevron.svg" alt="Seta para esquerda" />
            </S.NavButton>
            <S.NavButton
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo slide"
            >
              <img src="/svg/chevron.svg" alt="Seta para direita" />
            </S.NavButton>
          </S.NavigationWrapper>

          <S.Pagination className="swiper-pagination-custom" />
        </S.CarouselWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default FactorsCarousel;
