import React from 'react';
import { useFetchUsers } from './../hooks/useFetchUsers';

export default function Users() {
  const { status, users } = useFetchUsers({ howManyUsers: 10, pageNumber: 1 });
}
