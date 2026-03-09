import { useState, useEffect } from "react";
import { Box, Button, Card, Stack, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { ClientWhatsappData } from "../../../types/client";
import { fetchToGetBot } from "../../../requests/whatsbot";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../requests/firebase";
import { COLORS } from "../../../constants/cssVariables";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [clients, setClients] = useState<ClientWhatsappData[]>([]);
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [response, setResponse] = useState<string>("");

  useEffect(() => {
    const fetchClients = async () => {
      const clientsCol = collection(db, "clients");
      const clientSnapshot = await getDocs(clientsCol);
      const clientList = clientSnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as ClientWhatsappData)
      );
      setClients(clientList);
    };
    fetchClients();
  }, []);

  const sendMessage = async () => {
    if (!selectedClientId) return;

    const res = await fetchToGetBot(selectedClientId);
    const data = await res.json();
    setResponse(data.status);

    if (data.qrCode) setQrCode(data.qrCode);
  };

  return (
    <Container>
      <AuthContainer>
        <Logo
          src="/images/whatsbot/premium/logo.png"
          onClick={() => router.push("/services/whatsbot-premium")}
        />
        <Stack direction={"row"} alignItems={"center"} columnGap={1}>
          <Button
            variant="contained"
            color="inherit"
            href="/whatsbot/auth/login"
          >
            Entrar
          </Button>
          <Button
            variant="contained"
            color="info"
            href="/whatsbot/auth/register"
          >
            Criar Conta
          </Button>
        </Stack>
      </AuthContainer>

      <CreateAccount variant="h3" mt={2} textAlign={"center"}>
        <a href="/whatsbot/auth/register">Crie</a> sua conta ou faça{" "}
        <a href="/whatsbot/auth/login">login</a>
      </CreateAccount>
      <Typography variant="h5" mb={2} textAlign={"center"}>
        Para utilizar nossos serviços
      </Typography>

      {/*<FormContainer elevation={14}>
        <Typography variant="h3" textAlign={"center"}>
          Gerenciamento de Bots com Next.js
        </Typography>

        <ButtonsContainer>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            columnGap={1}
            width={"100%"}
          >
            <Button
              variant="contained"
              title="Adicionar Cliente"
              fullWidth
              endIcon={<AddIcon />}
              href="/add"
            >
              Adicionar
            </Button>
            <Button
              variant="contained"
              title="Verificar Clientes"
              fullWidth
              endIcon={<ListAltIcon />}
            >
              Ver Andamentos
            </Button>
          </Stack>
        </ButtonsContainer>

        <StyledSelect
          value={selectedClientId || ""}
          onChange={(e) => setSelectedClientId(e.target.value)}
        >
          <option value="">Selecione um cliente</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </StyledSelect>

        <Button variant="contained" fullWidth onClick={sendMessage}>
          Enviar
        </Button>
        <p>Resposta: {response}</p>
        {qrCode && (
          <div>
            <h2>QR Code do WhatsApp</h2>
            <img src={qrCode} alt="QR Code do WhatsApp" />
          </div>
        )}
      </FormContainer>*/}
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(/images/whatsbot/fundo.jpeg);
  background-attachment: fixed;
  background-position: center;
`;
const ButtonsContainer = styled(Box)`
  width: 100%;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
const AuthContainer = styled(Box)`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(/images/whatsbot/premium/banner.png);
  background-position: center;
  background-size: cover;
  border-bottom: 1.2px solid gray;
  width: 100%;
`;
const CreateAccount = styled(Typography)`
  a {
    :hover {
      color: ${COLORS.firstColor};
      text-decoration-line: underline;
    }
  }
`;
const Logo = styled("img")`
  width: 200px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;
const FormContainer = styled(Card)`
  padding: 2.5rem;
  width: 50%;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin: 1rem 0;

  @media screen and (max-width: 760px) {
    padding: 1.5rem;
    width: 100%;
  }
`;
const StyledSelect = styled("select")`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 1rem;
`;
const StyledInput = styled("input")`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
  border-radius: 1rem;
  padding: 1rem;
`;
const StyledButton = styled("button")`
  width: 50%;
  max-width: 350px;
  height: 50px;
  background-color: dodgerblue;
  outline: none;
  border: none;
  cursor: pointer;
  :hover {
    border: 1px solid white;
  }
`;
