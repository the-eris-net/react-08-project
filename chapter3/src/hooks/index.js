import { useState, useEffect } from 'react';

export function useFetch(url, headers, timeout = 0) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    setIsLoading(true);
    fetch(url, { headers })
      .then((res) => {
        if (!res.ok) throw new Error('데이터가 없습니다.');
        return res.json();
      })
      .then((data) => setData(data))
      .catch(() => setData(null))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, timeout);
      });
  }, [url]);
  return [data, isLoading];
}