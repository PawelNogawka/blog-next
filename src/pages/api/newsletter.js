import { connectDatabse, insertDocument } from "../../helpers/db-util";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const email = req.body.email;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Niepoprawny adres email" });
      return;
    }

    let client;

    try {
      client = await connectDatabse();
    } catch (error) {
      res.status(500).json({ message: "Nie udało sie połączyc z bazą danych" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data fail" });
      return;
    }

    res.status(201).json({ message: "Zostałes zarejestrowany" });
  }
}
