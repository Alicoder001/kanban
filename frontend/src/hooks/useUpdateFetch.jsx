/** @format */

import React, { useEffect, useState } from 'react';

const useUpdateFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const updateData = async (url, data) => {
    setPending(true);

    try {
      const req = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!req.ok) {
        throw new Error('Wrong!');
      }
      setPending(false);
    } catch (err) {
      setError(err.message);
    }
    return { error, pending };
  };

  return { updateData };
};

export default useUpdateFetch;
