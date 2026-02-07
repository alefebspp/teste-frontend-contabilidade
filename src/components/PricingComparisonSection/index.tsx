import * as S from "./styles";

const PricingComparisonSection = () => (
  <S.Wrapper>
    <S.Container>
      <S.ImageWrapper>
        <S.Image
          src="/img/dobra2-image.png"
          alt="Mulher visualizando tela do notebook"
        />
      </S.ImageWrapper>

      <S.Content>
        <S.Heading>O preço da contabilidade no Brasil</S.Heading>

        <S.Text>
          Um contador tradicional costuma cobrar entre R$ 600 e R$ 1.200 por mês
          para empresas de serviços de pequeno porte. Esse valor varia de acordo
          com o regime tributário, quantidade de notas fiscais emitidas e folha
          de pagamento.
        </S.Text>

        <S.Text>
          O problema é que, além do preço mais alto, a contabilidade tradicional
          geralmente envolve mais burocracia, digitação e processos manuais.
        </S.Text>
      </S.Content>
    </S.Container>
  </S.Wrapper>
);

export default PricingComparisonSection;
