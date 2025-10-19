import { useState, useEffect } from 'react';

/* chapter2 추가 */
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

/* chapter3추가 */
export function useDebounce(delay = 300) {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return [value, debouncedValue, setValue];
}
