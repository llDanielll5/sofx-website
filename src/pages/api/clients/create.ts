// pages/api/bot.js
import { create, Whatsapp, Message } from "venom-bot";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { ClientWhatsappData } from "../../../types/client";
import { db } from "../../../requests/firebase";

type Data = {
  status: string;
  result?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, phoneNumber } = req.body as ClientWhatsappData;

    const newClient = {
      botActive: false,
      name,
      phoneNumber,
      chatId: "",
      bots: [],
    } as ClientWhatsappData;

    const clientRef = collection(db, "clients");
    const q = query(clientRef, where("phoneNumber", "==", phoneNumber));
    const searchClient = await getDocs(q);

    if (searchClient.size > 0) {
      if (searchClient.docs[0].exists()) {
        return res.status(500).json({
          status: "error",
          error: "Já existe um cliente cadastrado com esse número",
        });
      }
    }

    const addedClient = await addDoc(clientRef, newClient);
    const firebaseId = addedClient.id;
    const newDoc = doc(db, "clients", firebaseId);
    await updateDoc(newDoc, { id: firebaseId });

    res.status(200).json({
      status: "success",
      result: "Cliente criado com sucesso na base de dados!",
    });
  } else {
    res.status(405).json({ status: "error", error: "Method not allowed" });
  }
}
