import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function ContactEmail({
  name,
  email,
  phone,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Novo contato recebido pelo site da Sofx</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={badgeContainer}>
            <Text style={badge}>Novo Lead</Text>
          </Section>

          <Heading style={heading}>Novo contato pelo formulário</Heading>

          <Text style={paragraph}>
            Você recebeu uma nova mensagem da landing page da{" "}
            <strong>Sofx</strong>.
          </Text>

          <Section style={card}>
            <Text style={label}>Nome</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>E-mail</Text>
            <Text style={value}>{email}</Text>

            <Text style={label}>Telefone</Text>
            <Text style={value}>{phone?.trim() ? phone : "Não informado"}</Text>

            <Text style={label}>Mensagem</Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Enviado automaticamente pelo formulário de contato do site.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#0b1020",
  margin: "0",
  padding: "32px 16px",
  fontFamily: "Inter, Arial, sans-serif",
};

const container = {
  maxWidth: "620px",
  margin: "0 auto",
  backgroundColor: "#111827",
  border: "1px solid #1f2937",
  borderRadius: "20px",
  padding: "32px",
};

const badgeContainer = {
  marginBottom: "16px",
};

const badge = {
  display: "inline-block",
  backgroundColor: "#0f172a",
  color: "#22d3ee",
  border: "1px solid #164e63",
  borderRadius: "999px",
  padding: "6px 12px",
  fontSize: "12px",
  fontWeight: "700",
};

const heading = {
  color: "#f9fafb",
  fontSize: "28px",
  lineHeight: "36px",
  margin: "0 0 12px",
};

const paragraph = {
  color: "#cbd5e1",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 24px",
};

const card = {
  backgroundColor: "#0f172a",
  border: "1px solid #1e293b",
  borderRadius: "16px",
  padding: "24px",
};

const label = {
  color: "#22d3ee",
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  margin: "0 0 6px",
};

const value = {
  color: "#f8fafc",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 18px",
};

const messageBox = {
  color: "#f8fafc",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
  padding: "16px",
  backgroundColor: "#111827",
  border: "1px solid #334155",
  borderRadius: "12px",
  whiteSpace: "pre-line" as const,
};

const hr = {
  borderColor: "#1f2937",
  margin: "24px 0",
};

const footer = {
  color: "#94a3b8",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0",
};
