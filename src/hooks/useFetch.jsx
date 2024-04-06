// use this for Categories and Shopping Cart (to pull individual items)

// netninja custom hooks
// makes more sense to do custom hook then useContext since useContext it parent to sibling forcing us to put the Cart stuff in the MainLayout

import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState();

  // useEffect( async () => {
  //     setLoading(true);
  //     try {
  //         // const res = await fetch(`https://fakestoreapi.com/${url}`)
  //         const res = await fetch(url)
  //         const resultObj = await res.json()
  //         setData(resultObj);
  //     } catch (e) {
  //         setError("something went wrong")
  //     } finally {
  //         setLoading(false)
  //     }
  // }, [url])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const resultObj = await response.json();
        setData(resultObj);
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};

export default useFetch;
    