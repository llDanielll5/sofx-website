import { ENDPOINTS } from "./endpoints";

interface NewClientData {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}

export const createNewClient = async (clientData: NewClientData) => {
  const { email, name, password, phoneNumber } = clientData;
  return await fetch(ENDPOINTS.CLIENTS.CREATE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phoneNumber, email, password }),
  });
};
