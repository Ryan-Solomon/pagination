import React, { useState } from 'react';
import styled from 'styled-components';
import BottomPages from '../components/BottomPages';
import FollowerCard from '../components/FollowerCard';
import { useFetchUsers } from './../hooks/useFetchUsers';

export default function Users() {
  const [pageNumber, setPageNumber] = useState(0);
  const [howManyUsers, setHowManyUsers] = useState(10);
  const { status, users } = useFetchUsers({ howManyUsers, pageNumber });
  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error' || !users) return <h1>Error</h1>;

  const changePage = (direction: 'PREV' | 'NEXT') => {
    if (direction === 'PREV') {
      setPageNumber(Math.max(0, pageNumber - 1));
    } else if (direction === 'NEXT') {
      setPageNumber(Math.min(10, pageNumber + 1));
    }
  };

  return (
    <>
      <UsersContainer>
        {users.length > 0 &&
          users.map((user) => {
            return <FollowerCard user={user} key={user.id} />;
          })}
      </UsersContainer>
      <BottomPages
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        changePage={changePage}
        pageCount={10}
      />
    </>
  );
}

const UsersContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;
