import Button from "components/Button";

import * as S from "./styles";

const HeroSection = () => (
  <S.Wrapper>
    <S.BackgroundBlur />

    <S.Container>
      <S.Content>
        <S.Heading>
          Quanto custa a
          <br />
          contabilidade online
          <br />
          em 2026?
        </S.Heading>

        <S.Description>
          Descubra os preços médios do mercado e veja como a contabilidade.com
          oferece planos acessíveis, abertura grátis e suporte completo para o
          seu CNPJ.
        </S.Description>

        <S.Actions>
          <S.ButtonWrapper>
            <Button type="button">Planos e Preços</Button>
            <Button variant="outline" type="button">
              Falar com Especialista
            </Button>
          </S.ButtonWrapper>
          <S.CrcText>CRC SP-2SP038830/O-1</S.CrcText>
        </S.Actions>
      </S.Content>

      <S.SideIllustration>
        <S.IllustrationCard
          src="/img/dobra1-image.png"
          alt="Ilustração sobre contabilidade online em 2026"
        />
      </S.SideIllustration>
    </S.Container>
  </S.Wrapper>
);

export default HeroSection;
