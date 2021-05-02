//Custom hook to fetch data from any url

import { useEffect, useState } from "react"

const useRetrieve = url => {
  const [data, setData] = useState(null);

  useEffect((url) => {
    const retrieveData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };

    retrieveData();
  }, [url]);

  return data;
};

export default useRetrieve;