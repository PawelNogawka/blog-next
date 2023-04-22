import { connectDatabse, getAllDocuments } from "../../../helpers/db-util";

export default async function handler(req, res) {
  let client;

  try {
    client = await connectDatabse();
  } catch (error) {
    res.status(500).json({ message: "Nie udało się połączyć z bazą danych" });
    return;
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, "categories", {
        _id: -1,
      });
      res.status(200).json({ categories: documents });
    } catch (error) {
      res.status(500).json({ message: "Nie udało sie pobrać kategorii" });
    }
  }

  client.close();
}
