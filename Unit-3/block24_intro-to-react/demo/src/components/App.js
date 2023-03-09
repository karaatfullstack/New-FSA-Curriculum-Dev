import React from 'react';
import NavBar from './NavBar';
import ClassListOfUsers from './ClassListOfUsers';
import ListOfUsers from './ListOfUsers';

export default function App() {
  return (
    <>
      <NavBar />
      <ListOfUsers />
      <ClassListOfUsers />
    </>
  );
}
