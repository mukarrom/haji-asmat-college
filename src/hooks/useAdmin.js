import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:3001/api/v1/users/admin/${email}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setAdmin(data);
          setAdminLoading(false);
        });
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;
