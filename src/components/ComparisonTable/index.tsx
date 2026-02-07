import * as S from "./styles";

const ComparisonTable = () => {
  const rows = [
    {
      feature: "Mensalidade média",
      contabilidadeCom: "A partir de R$ 159",
      tradicional: "R$ 600 – R$ 1.200",
    },
    {
      feature: "Abertura de empresa",
      contabilidadeCom: "Grátis",
      tradicional: "R$ 500 – R$ 1.000",
    },
    {
      feature: "Certificado digital",
      contabilidadeCom: "1º ano incluso",
      tradicional: "Pago à parte",
    },
    {
      feature: "Emissor de NF-e",
      contabilidadeCom: "Incluso (ERP contábil)",
      tradicional: "Normalmente não incluso",
    },
    {
      feature: "Atendimento",
      contabilidadeCom: "Online + presencial quando necessário",
      tradicional: "Presencial, horário comercial",
    },
    {
      feature: "Plataforma financeira",
      contabilidadeCom: "Incluso (ERP contábil)",
      tradicional: "Normalmente não incluso",
    },
  ];

  return (
    <S.Wrapper>
      <S.Container>
        <S.Heading>Veja a diferença de custos e benefícios</S.Heading>

        {/* Desktop Table */}
        <S.TableWrapper>
          <S.Table>
            <S.TableHeader>
              <tr>
                <S.HeaderCell></S.HeaderCell>
                <S.HeaderCell variant="highlight">
                  <img src="/svg/logo.svg" alt="Logo Contabilidade.com" />
                </S.HeaderCell>
                <S.HeaderCell>Contabilidade tradicional</S.HeaderCell>
              </tr>
            </S.TableHeader>

            <S.TableBody>
              {rows.map((row, index) => (
                <S.TableRow key={index}>
                  <S.FeatureCell>{row.feature}</S.FeatureCell>
                  <S.ValueCell variant="highlight">
                    {row.contabilidadeCom}
                  </S.ValueCell>
                  <S.ValueCell>{row.tradicional}</S.ValueCell>
                </S.TableRow>
              ))}
            </S.TableBody>
          </S.Table>
        </S.TableWrapper>

        {/* Mobile Cards */}
        <S.MobileCards>
          <S.MobileCard variant="highlight">
            <S.MobileCardTitle>Contabilidade.com</S.MobileCardTitle>
            <S.MobileCardContent>
              {rows.map((row, index) => (
                <S.MobileCardRow key={index}>
                  <S.MobileCardLabel>{row.feature}</S.MobileCardLabel>
                  <S.MobileCardValue>{row.contabilidadeCom}</S.MobileCardValue>
                </S.MobileCardRow>
              ))}
            </S.MobileCardContent>
          </S.MobileCard>

          <S.MobileCard>
            <S.MobileCardTitle>Contabilidade tradicional</S.MobileCardTitle>
            <S.MobileCardContent>
              {rows.map((row, index) => (
                <S.MobileCardRow key={index}>
                  <S.MobileCardLabel>{row.feature}</S.MobileCardLabel>
                  <S.MobileCardValue variant="tradicional">
                    {row.tradicional}
                  </S.MobileCardValue>
                </S.MobileCardRow>
              ))}
            </S.MobileCardContent>
          </S.MobileCard>
        </S.MobileCards>
      </S.Container>
    </S.Wrapper>
  );
};

export default ComparisonTable;
