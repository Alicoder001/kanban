/** @format */

import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const getData = async () => {
    setPending(true);
    try {
      const req = await fetch(url);

      if (!req.ok) {
        throw new Error('Wrong!');
      }
      setPending(false);
      const data = await req.json();
      setData(data);
    } catch (err) {
      setError(err.message);
   
    }
  };
  
  useEffect(() => {
    getData();
  }, [url]);
  return { data, pending, error };
};

export default useFetch;
