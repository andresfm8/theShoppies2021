//Custom hook to fetch data from any url

import { useEffect, useState } from "react"

const useRetrieve = (url, param, ...additionalData) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const retrieveData = async () => {
      try{
        
        const completeURL = await url.concat(param);
        const response = await fetch(completeURL);
        const data = await response.json();
        
        if(param === undefined || param === null || param === '')
          throw new Error()

        if(additionalData){
          console.log(data);
          setData(data);
        } else //If there are too many results
          throw new Error()

      } catch (err){
        return data;
      }
    };

    retrieveData();
  }, [url, param]);

  return data;
};

export default useRetrieve;