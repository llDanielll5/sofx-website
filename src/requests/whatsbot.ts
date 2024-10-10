export const fetchToGetBot = async (selectedClientId: string) => {
  return await fetch("/api/whatsbot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      clientId: selectedClientId,
    }),
  });
};
