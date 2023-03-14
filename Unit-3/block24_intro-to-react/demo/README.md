# Block 24 Intro to React Demo Solution

## Continued from Team Exercise Solution

1. Refactor by rendering `JSX`.

- Feel free to comment out the `main()` function

- Put a couple notes in comments to explain `JSX`

```js
/* JSX is like html, but not quite.
 * In JSX all elements must have an overarching parent.
 * In this case that is a fragment.
 */
const JSX = (
  <>
    <h1>USERS</h1>
    <ul>
      <li>Sean</li>
      <li>Steven</li>
      <li>Tri</li>
      <li>Chloe</li>
    </ul>
  </>
);

root.render(JSX);
```

2. Javascript expressions in `JSX`

```js
// You can write javascript expressions in JSX using curly braces.
const JSX = (
  <>
    <h1>USERS</h1>
    <ul>
      <li>{users[0].name}</li>
    </ul>
  </>
);

root.render(JSX);
```

3. Using `Array.map()` and `key` prop

```js
/* Notice: this is what we did above in the usersList function.
 * React uses the key prop to uniquely identify each item in a list.
 * Typically, it's not a good idea to use the index.
 */
const JSX = (
  <>
    <h1>USERS</h1>
    <ul>
      {users.map((user, index) => {
        return <li key={user.name + index}>{user.name}</li>;
      })}
    </ul>
  </>
);

root.render(JSX);
```

4. Write a functional component to render the list

```js
function ListOfUsers() {
  return (
    <>
      <h1>ListOfUsers</h1>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

root.render(<ListOfUsers />);
```

5. Write a functional component to build our list items.

```js
function UserListItems() {
  return (
    <>
      {users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      })}
    </>
  );
}
```

6. Use the `UserListItems` component to render the list.

- Render the list once.

```js
// You can see that the list is populated once
// The power of creating components is that they are reusable.
function ListOfUsers() {
  return (
    <>
      <h1>ListOfUsers</h1>
      <ul>
        {/* {users.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })} */}
        <UserListItems />
      </ul>
    </>
  );
}
```

- Render the list multiple times. Then, comment the extras out.

```js
// You can see that the list is populated once
// The power of creating components is that they are reusable.
function ListOfUsers() {
  return (
    <>
      <h1>ListOfUsers</h1>
      <ul>
        <UserListItems />
        {/* <UserListItems />
        <UserListItems /> */}
      </ul>
    </>
  );
}
```

7. Create a component `App` to hold other components and render `App`.

```js
function App() {
  return (
    <>
      <ListOfUsers />
    </>
  );
}

root.render(<App />);
```

8. Write a basic `NavBar` component and add it to `App`.

```js
function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact Us!</a>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <ListOfUsers />
    </>
  );
}
```

9. Write a Class based Component to render the list of users.

```js
class ClassListOfUsers extends React.Component {
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

function App() {
  return (
    <>
      <NavBar />
      <ListOfUsers />
      <ClassListOfUsers />
    </>
  );
}
```

10. Modularize the demo to show `import/export`.

- `export` the users at the top of `index.js` or move them to `UserListItems.js`.
- Remove any unneed code in `index.js`.
