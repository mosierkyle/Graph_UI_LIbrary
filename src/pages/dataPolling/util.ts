import { useEffect, useState } from 'react';

//React hook for polling data from an API at a predetermined interval
const useDataPoll = () => {
  //eslint-disable-next-line
  const [data, setData] = useState<any>(null);
  const [checkData, setCheckData] = useState<number | null>(null);
  //use effect initializing the interval and getting initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.quotable.io/quotes/random`);
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // 10 second interval
    const interval = setInterval(() => {
      setCheckData(Date.now());
    }, 10000);

    fetchData();

    return () => clearInterval(interval);
  }, [checkData]);

  return data;
};

export default useDataPoll;
