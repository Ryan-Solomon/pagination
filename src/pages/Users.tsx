import React from 'react';
import styled from 'styled-components';
import FollowerCard from '../components/FollowerCard';
import { useFetchUsers } from './../hooks/useFetchUsers';

export default function Users() {
  const { status, users } = useFetchUsers({ howManyUsers: 10, pageNumber: 1 });
  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error' || !users) return <h1>Error</h1>;

  return (
    <UsersContainer>
      {users.length > 0 &&
        users.map((user) => {
          return <FollowerCard user={user} key={user.id} />;
        })}
    </UsersContainer>
  );
}

const UsersContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;
