import { useState, useEffect } from "react";

export const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [shouldReload, setShouldReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(query);
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message);
        }

        const data = await response.json();

        setData(data);
        setError(null);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError(error.message);
      }
    };

    getData();
  }, [query, shouldReload]);

  return { data, setShouldReload, isLoading, error };
};
