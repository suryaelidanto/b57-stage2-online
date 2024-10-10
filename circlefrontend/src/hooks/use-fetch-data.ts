import { useEffect, useState } from "react";

export function useFetchData<T>(url: string): {
  datas: T[];
  error: unknown;
} {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setDatas(result))
      .catch((error) => setError(error));
  }, [url]);

  return {
    datas,
    error,
  };
}
