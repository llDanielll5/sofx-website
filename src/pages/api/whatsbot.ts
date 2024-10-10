// pages/api/bot.js
import { create, Whatsapp, Message } from "venom-bot";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../requests/firebase";

type Data = {
  status: string;
  result?: any;
  error?: string;
  qrCode?: any;
};

interface ClientData {
  name: string;
  phoneNumber: string;
  botActive: boolean;
}

let clientsBots: { [key: string]: any } = {};

// async function createBot(clientId: string, phoneNumber: string) {
//   const clientBot: Whatsapp = await create(clientId, (CatchQR));
//   clientsBots[clientId] = clientBot;

//   clientBot.onMessage((message: Message) => {
//     if (message.body === "Oi") {
//       clientBot.sendText(
//         message.from,
//         `Olá! Sou o bot do cliente ${clientId}. Como posso ajudar você hoje?`
//       );
//     }
//   });

//   return clientBot;
// }

async function createBot(
  clientId: string,
  phoneNumber: string
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    create({
      session: clientId,
      catchQR(qr) {
        resolve(qr);
      },
    })
      .then(async (clientBot) => {
        clientsBots[clientId] = clientBot;
        clientBot.onMessage((message: Message) => {
          if (message.body === "Oi") {
            clientBot.sendText(
              message.from,
              `Olá! Sou o bot do cliente ${clientId}. Como posso ajudar você hoje?`
            );
          }
        });
        // resolve(await clientBot.getQrCode());
      })
      .catch((err) => {
        console.error("Erro ao criar o bot:", err);
        reject(err);
      });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { clientId } = req.body;

    console.log({ clientId });

    const clientRef = doc(db, "clients", clientId);
    const clientSnap = await getDoc(clientRef);

    if (!clientSnap.exists()) {
      return res
        .status(404)
        .json({ status: "error", error: "Client not found" });
    }

    const clientData = clientSnap.data() as ClientData;

    // if (!clientData.botActive) {
    //   await createBot(clientId, clientData.phoneNumber);
    //   await updateDoc(clientRef, { botActive: true });
    // }
    // const clientBot = clientsBots[clientId] as Whatsapp;

    if (!clientData.botActive) {
      // await updateDoc(clientRef, { botActive: true });
      try {
        const qrCode = await createBot(clientId, clientData.phoneNumber);
        return res.status(200).json({ status: "success", qrCode });
      } catch (error) {
        return res
          .status(500)
          .json({ status: "error", error: "Failed to create bot" });
      }
    } else {
      return res.status(200).json({ status: "success", qrCode: "" });
    }

    // if (clientBot) {
    //   // clientBot
    //   //   .sendText(message.from, message.body)
    //   //   .then((result: any) =>
    //   //     res.status(200).json({ status: "success", result })
    //   //   )
    //   //   .catch((error: any) =>
    //   //     res.status(500).json({ status: "error", error })
    //   //   );
    //   const qr = await clientBot.getQrCode();
    //   const statusZap = await clientBot.getStateConnection();

    //   if (statusZap) {
    //     res.status(200).json({
    //       status: "success",
    //       result: `Cliente inicializado com status:${statusZap}`,
    //       qrCode: qr,
    //     });
    //   }
    // } else {
    //   res
    //     .status(500)
    //     .json({ status: "error", error: "Bot client not initialized" });
    // }
  } else {
    res.status(405).json({ status: "error", error: "Method not allowed" });
  }
}
