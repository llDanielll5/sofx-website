import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../../../../layouts/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    if (!email) return alert("Você não digitou seu email!");
    if (!password) return alert("Preencha sua senha!");
    return;
  };

  return (
    <>
      <Typography variant="h3" mt={2} p={1} bgcolor="white" borderRadius={1}>
        Entrar
      </Typography>
      <HaveAccount mb={2} bgcolor={"white"} borderRadius={1} p={1}>
        Não possui conta?{" "}
        <a href="/whatsbot/auth/register">Faça seu cadastro</a>
      </HaveAccount>
      <FormContainer elevation={10}>
        <Grid container sx={{ flex: "1 1 auto" }}>
          <TextField label="Email*" variant="filled" fullWidth margin="dense" />
          <TextField label="Senha*" variant="filled" fullWidth margin="dense" />

          <Button variant="contained" sx={{ mt: 1 }} onClick={onSubmit}>
            Entrar
          </Button>
        </Grid>
      </FormContainer>
    </>
  );
};

LoginPage.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

const FormContainer = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  width: 50%;
  padding: 1rem;
  margin: 1rem 0;
`;
const HaveAccount = styled(Typography)`
  a {
    color: darkblue;
    text-decoration-line: underline;
    :hover {
      color: blue;
    }
  }
`;

export default LoginPage;
