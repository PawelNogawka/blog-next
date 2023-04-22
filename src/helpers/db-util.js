import { MongoClient } from "mongodb";

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

export async function connectDatabse() {
  const client = await MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ke2u009.mongodb.net/blog?retryWrites=true&w=majority`
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(
  client,
  collection,
  sort,
  limitValue,
  find = {}
) {
  const db = client.db();
  let documents;

  if (limitValue) {
    documents = await db
      .collection(collection)
      .find(find)
      .sort(sort)
      .limit(limitValue)
      .toArray();
  } else {
    documents = await db.collection(collection).find(find).sort(sort).toArray();
  }

  return documents;
}

export async function getPostsWithQuery(client, query, sort, limitValue) {
  const db = client.db();
  let documents;

  if (limitValue) {
    documents = await db
      .collection("posts")
      .find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } },
        ],
      })
      .sort(sort)
      .limit(limitValue)
      .toArray();
  } else {
    documents = await db
      .collection("posts")
      .find({
        $or: [
          { title: { $regex: query, $options: "i" } },
          { category: { $regex: query, $options: "i" } },
        ],
      })
      .sort(sort)
      .toArray();
  }

  return documents;
}
