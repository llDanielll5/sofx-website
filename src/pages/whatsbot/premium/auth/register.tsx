import React, { useState } from "react";
import {
  Button,
  Card,
  Grid,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { createNewClient } from "../../../../requests/clients";
import { AuthLayout } from "../../../../layouts/auth";

const headerGridStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 2,
  width: "100%",
};

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async () => {
    if (!name) return alert("Adicione o nome do cliente!");
    if (!phoneNumber) return alert("Adicione o telefone do cliente!");
    if (!password.match(confirmPassword))
      return alert("As senhas devem coincidir-se");

    const res = await createNewClient({ name, phoneNumber, email, password });
    const data = await res.json();

    if (data.status === "success") {
      window.open("/");
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <Typography variant="h3" mt={2} p={1} bgcolor="white" borderRadius={1}>
        Registre-se
      </Typography>
      <HaveAccount mb={2} bgcolor={"white"} borderRadius={1} p={1}>
        Já tem conta? <a href="/whatsbot/auth/login">Faça login</a>
      </HaveAccount>
      <FormContainer elevation={10}>
        <Grid container sx={{ flex: "1 1 auto" }}>
          <Grid xs={12} lg={12} sx={headerGridStyle}>
            <TextField
              label="Nome Completo*"
              variant="filled"
              fullWidth
              margin="dense"
            />
            <TextField
              label="Telefone*"
              variant="filled"
              fullWidth
              margin="dense"
            />
          </Grid>
          <TextField label="Email*" variant="filled" fullWidth margin="dense" />
          <TextField label="Senha*" variant="filled" fullWidth margin="dense" />
          <TextField
            label="Confirmar Senha*"
            variant="filled"
            fullWidth
            margin="dense"
          />

          <Button variant="contained" sx={{ mt: 1 }} onClick={onSubmit}>
            Criar Conta
          </Button>
        </Grid>
      </FormContainer>
    </>
  );
};

RegisterPage.getLayout = (page: any) => <AuthLayout>{page}</AuthLayout>;

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

export default RegisterPage;
