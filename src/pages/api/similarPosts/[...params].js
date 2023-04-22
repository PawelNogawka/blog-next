import { connectDatabse, getPostsWithQuery } from "../../../helpers/db-util";

export default async function handler(req, res) {
  const [category, id] = req.query.params;

  let client;

  try {
    client = await connectDatabse();
  } catch (error) {
    res.status(500).json({ message: "Nie udało się połączyć z bazą danych" });
    return;
  }

  if (req.method === "GET") {
    try {
      const documents = await getPostsWithQuery(client, category, { _id: -1 });

      res.status(200).json({ posts: documents });
    } catch (error) {
      res.status(500).json({ message: "Nie udało sie pobrać postów" });
    }
  }

  client.close();
}
