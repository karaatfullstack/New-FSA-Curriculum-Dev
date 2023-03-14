export const users = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 81, occupation: 'teacher' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 76, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 72, occupation: 'driver' },
];

// function main() {
//   const vanillaRoot = document.querySelector('#vanilla-root');
//   const h1 = document.createElement('h1');

//   h1.innerHTML = 'USERS';
//   vanillaRoot.appendChild(h1);

//   const ul = document.createElement('ul');

//   for (let i = 0; i < users.length; i++) {
//     const li = document.createElement('li');

//     li.innerHTML = users[i].name;
//     ul.appendChild(li);
//   }

//   vanillaRoot.appendChild(ul);
// }

// main();

/****************************************************/
/************Start Team Exercise Solution************/
/****************************************************/
// import React, { createElement, Fragment } from 'react';
// import { createRoot } from 'react-dom/client';

// const domNode = document.querySelector('#root');
// const root = createRoot(domNode);

// const reactH1 = createElement('h1', {}, 'USERS');

// const reactUl = createElement('ul', {}, usersList());

// function usersList() {
//   return users.map((user) => {
//     const li = createElement('li', {}, user.name);
//     return li;
//   });
// }

// const reactFragment = createElement(Fragment, {}, reactH1, reactUl);
// root.render(reactFragment);

/****************************************************/
/*********Demo Continued: Refactor using JSX*********/
/****************************************************/
import React, { createElement, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const domNode = document.querySelector('#root');
const root = createRoot(domNode);
root.render(<App />);

/****************************************************/
/*******Code Below Has Been Moved Into Modules*******/
/****************************************************/

// Step 1: hard coded names
/* JSX is like html, but not quite.
 * In JSX all elements must have an overarching parent.
 * In this case that is a fragment.
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
*/

// Step 2: js expressions in JSX
/* You can write javascript expressions in JSX using curly braces.
const JSX = (
  <>
    <h1>USERS</h1>
    <ul>
      <li>{users[0].name}</li>
    </ul>
  </>
);
*/

// Step 3: Using Array.map() and key prop
/* Notice: this is what we did above in the usersList function.
 * React uses the key prop to uniquely identify each item in a list.
 * Typically, it's not a good idea to use the index.
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
*/

// Step 4: Write a functional component to render the list
/*
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
*/

// Step 5: Write a functional component to build a list.
// function UserListItems() {
//   return (
//     <>
//       {users.map((user, index) => {
//         return <li key={index}>{user.name}</li>;
//       })}
//     </>
//   );
// }

// Step 6: use the UserListItems component to render the list.
// You can see that the list is populated once
// The power of creating components is that they are reusable.
// function ListOfUsers() {
//   return (
//     <>
//       <h1>ListOfUsers</h1>
//       <ul>
//         {/* {users.map((user, index) => {
//           return <li key={index}>{user.name}</li>;
//         })} */}
//         <UserListItems />
//         {/* <UserListItems />
//         <UserListItems /> */}
//       </ul>
//     </>
//   );
// }

// Step 7: Create a component App to hold other components.
// function App() {
//   return (
//     <>
//       <NavBar />
//       <ListOfUsers />
//       <ClassListOfUsers />
//     </>
//   );
// }

// Step 8: Write a basic NavBar component and add it to App.
// function NavBar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <a href='/'>Home</a>
//         </li>
//         <li>
//           <a href='/about'>About</a>
//         </li>
//         <li>
//           <a href='/contact'>Contact Us!</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// Step 9: Write a Class based Component to render the list of users.
// class ClassListOfUsers extends React.Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return (
//       <>
//         <h1>ClassListOfUsers</h1>
//         <ul>
//           <UserListItems />
//         </ul>
//       </>
//     );
//   }
// }

// Step 10: modularize the demo to show import/export and remove any unneed code in this file.
