import React from 'react';
import UserListItems from './UserListItems';

export default class ClassListOfUsers extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h1>ClassListOfUsers</h1>
        <ul>
          <UserListItems />
        </ul>
      </>
    );
  }
}
