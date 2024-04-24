import React, { useState, useEffect } from "react";

//TODO: Implement

type ApiResponse<T> = {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
};

const useGet = <T>(url: string): ApiResponse<T> => {
  const [data, setData] = useState<T | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (response.ok) {
          const res = await response.json();
          setData(res);
          setIsLoading(false);
        } else {
          setIsError(true);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useGet;
