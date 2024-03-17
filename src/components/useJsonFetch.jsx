import { useState, useEffect } from 'react';
import axios from "axios";

const useJsonFetch = (url, opt) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] =useState(true);
  const [error, setError] = useState(null);

  async function asyncFucntion() {
    setLoading(true);
    try {
        const response = await axios.get(`${url}${opt}`);
        if (response.status < 200 || response.status > 299) {
            throw new Error(response.statusText);
          }
        setData(response.data);
        setLoading(false);
        setError(null);
    } catch(error) {
        setError(error);
    }
  }

  useEffect(() => {
    asyncFucntion();
  },[]);

  return { data, isLoading, error };

}

export default useJsonFetch;