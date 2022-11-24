import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);

      try {
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
      } catch (err) {
        setError("There was an error trying to load the data.");
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
