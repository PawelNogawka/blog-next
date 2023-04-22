import {
  connectDatabse,
  insertDocument,
  getAllDocuments,
} from "../../../helpers/db-util";

import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { name, text } = req.body;

  const postId = req.query.postId;

  let client;

  try {
    client = await connectDatabse();
  } catch (error) {
    res.status(500).json({ message: "Nie udało się połączyć z bazą danych" });
    return;
  }

  if (req.method === "POST") {
    if (!name || name.trim() == "" || !text || text.trim() == "") {
      res.status(422).json({ message: "Uzpełnij brakujące pola." });
      client.close();
      return;
    }

    const newComment = {
      name,
      text,
      postId,
      time: new Date(),
    };

    let result;

    try {
      result = await insertDocument(client, "comments", {
        ...newComment,
      });
      newComment._id = result.insertedId;

      res
        .status(201)
        .json({ message: "Komentarz został dodany", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Nie udało się umieścić komentarza" });
      return;
    }
  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        null,
        { postId: postId }
      );

      res.status(200).json({ comments: documents });
    } catch (error) {
      res.status(500).json({ message: "Nie udało się pobrać komentarzy" });
    }
  }

  client.close();
}
