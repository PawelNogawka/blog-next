import { useState } from "react";

export const usePost = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const addDocument = async (query, document) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(query, {
        method: "POST",
        body: JSON.stringify(document),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { data, isLoading, error, addDocument };
};
