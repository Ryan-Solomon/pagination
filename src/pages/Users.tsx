import React from 'react';
import FollowerCard from '../components/FollowerCard';
import { useFetchUsers } from './../hooks/useFetchUsers';

export default function Users() {
  const { status, users } = useFetchUsers({ howManyUsers: 10, pageNumber: 1 });
  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error' || !users) return <h1>Error</h1>;

  return (
    <>
      {users.length > 0 &&
        users.map((user) => {
          return <FollowerCard user={user} key={user.id} />;
        })}
    </>
  );
}
