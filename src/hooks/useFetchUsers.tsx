import React, { FC } from 'react';
import { TUser } from '../types/types';

type TProps = {
  pageNumber: number;
  howManyUsers: number;
};

type TStatus = 'loading' | 'fulfilled' | 'error';

export const useFetchUsers = ({ howManyUsers, pageNumber }: TProps) => {
  const [users, setUsers] = React.useState<TUser[] | null>(null);
  const [status, setStatus] = React.useState<TStatus>('loading');

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/john-smilga/followers?page=${pageNumber}&per_page=${howManyUsers}`
        );
        if (res.status !== 200) {
          throw new Error('Non-200 status code');
        }
        const data = await res.json();
        setUsers(data);
        setStatus('fulfilled');
      } catch (error) {
        console.warn(error.message);
        setStatus('error');
      }
    };
    getUsers();
  }, [pageNumber, howManyUsers]);

  return { status, users };
};
