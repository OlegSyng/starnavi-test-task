import { useEffect, useState } from "react";

type Settings = {
  name: string;
  field: number;
  id: string;
}[];

const useSettings = () => {
  const [data, setData] = useState<Settings | null>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch(
        "https://60816d9073292b0017cdd833.mockapi.io/modes",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const data: Settings = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [ data, error, isLoading ] as const;
};

export default useSettings;
//       