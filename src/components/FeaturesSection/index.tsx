import Button from "components/Button";
import FeatureCard from "components/FeatureCard";

import * as S from "./styles";

const FeaturesSection = () => {
  const features = [
    {
      src: "/svg/mdi_cash-off.svg",
      text: "Abertura de empresa grátis (sem taxas de honorários).",
      variant: "white" as const,
      alt: "Ícone de dinheiro com um X, representando a ausência de custos para abertura de empresa",
    },
    {
      src: "/svg/ph_certificate.svg",
      text: "Certificado digital incluso no 1º ano.",
      variant: "grayLight" as const,
      alt: "Ícone de certificado, representando o certificado digital incluso no primeiro ano",
    },
    {
      src: "/svg/hugeicons_note.svg",
      text: "Emissor de notas fiscais integrado.",
      variant: "gray" as const,
      alt: "Ícone de nota fiscal, representando o emissor de notas fiscais integrado",
    },
    {
      src: "/svg/solar_laptop-linear.svg",
      text: "Plataforma contábil online com fluxo de caixa, lançamentos, relatórios e controle de impostos.",
      variant: "greenLight" as const,
      alt: "Ícone de laptop, representando a plataforma contábil online com diversas funcionalidades",
    },
    {
      src: "/svg/material-symbols-light_support-agent-sharp.svg",
      text: "Atendimento personalizado (WhatsApp, telefone, e-mail e vídeo)",
      variant: "green" as const,
      alt: "Ícone de agente de suporte, representando o atendimento personalizado oferecido pela contabilidade.com",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Heading>
          Na contabilidade.com,
          <br />
          você tem planos a partir
          <br />
          de <strong>R$ 159/mês</strong>, já com:
        </S.Heading>

        <S.FeaturesGrid>
          <S.ImageWrapper>
            <S.Image
              src="/img/dobra3-image.jpg"
              alt="Mulher trabalhando em laptop no escritório"
            />
          </S.ImageWrapper>

          <S.FeaturesList>
            {features.map((feature, index) => (
              <FeatureCard key={index} index={index} {...feature} />
            ))}
          </S.FeaturesList>
        </S.FeaturesGrid>

        <S.ButtonWrapper>
          <Button type="button">Conheça os planos e preços</Button>
        </S.ButtonWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default FeaturesSection;
