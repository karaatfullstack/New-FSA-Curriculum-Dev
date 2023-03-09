import React from 'react';
import { users } from '..';

export default function UserListItems() {
  return (
    <>
      {users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </>
  );
}
