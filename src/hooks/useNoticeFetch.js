import { useEffect, useState } from 'react';

const useNoticeFetch = () => {
  const [notice, setNotice] = useState([]);
  useEffect(() => {
    fetch('notice.json')
      .then((res) => res.json())
      .then((data) => setNotice(data));
  }, []);
  return [notice, setNotice];
};

export default useNoticeFetch;
