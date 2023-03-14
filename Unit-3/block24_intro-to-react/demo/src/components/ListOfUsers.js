import React from 'react';
import UserListItems from './UserListItems';

export default function ListOfUsers() {
  return (
    <>
      <h1>ListOfUsers</h1>
      <ul>
        {/* {users.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })} */}
        <UserListItems />
        {/* <UserListItems />
        <UserListItems /> */}
      </ul>
    </>
  );
}
