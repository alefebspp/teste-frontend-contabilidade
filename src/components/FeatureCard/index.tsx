import * as S from "./styles";

export type FeatureCardProps = {
  src: string;
  text: string;
  index: number;
  alt: string;
  variant?: "white" | "grayLight" | "gray" | "greenLight" | "green";
};

const FeatureCard = ({
  src,
  text,
  variant = "grayLight",
  index,
  alt,
}: FeatureCardProps) => (
  <S.Card $variant={variant} $index={index}>
    <S.IconWrapper aria-hidden="true">
      <img src={src} alt={alt} />
    </S.IconWrapper>
    <S.Text>{text}</S.Text>
  </S.Card>
);

export default FeatureCard;
