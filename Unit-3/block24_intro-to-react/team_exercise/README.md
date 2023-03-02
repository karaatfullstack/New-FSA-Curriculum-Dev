# TeamExercise.Vanilla-DOM-to-React

A Team Exercise to connect the dots between vanilla DOM manipulation and React.js.

## Getting Started

Install Packages

    npm i

Run the start script

    npm run start

**NOTE:** The key word `run` isn't entirely necessary here, but you should get used to using it. You'll need it when you start writing your own scripts.

## Familiarize Yourself with the Starting Point

1. Open the file tree in the side panel of your Integrated Developer Environment(IDE).
2. View the `index.html` in the `public` directory.

- You'll notice there are two `div`'s in the body of the html.
- The `div` with `id="vanilla-root"` is where the list of contact data is being currently rendered. You can find this at the top of the `index.js` file in the `src` directory.
- The `div` with `id="root"` is where you will render the same list, but in React!

3. View the `index.js` file in the `src` directory.

- Notice that the code written is the solution to the DOM Workshop you completed earlier in the cohort.
- Follow the steps below or in the Team Exercise tab in Canvas.

## Use React to Mimic Vanilla JS DOM Manipulation

1. Gain access to the React and ReactDOM modules.

- Use `import` to access `React` from the `'react'` module, and `ReactDOM` from the `'react-dom/client'`.

2. Isolate the DOM node with the `"#root"` and hold it in a variable called `domNode`.

- This is the same thing that was done at the beginning of the `main` function.

3. Create a root so React can tap into our `domNode`.

- Use this method provided by ReactDOM:

```js
ReactDOM.createRoot(domNode, options?)
```

- Hold this in a variable called `root`.

4. Now, we can begin rendering to the DOM!

- Use the `render` method from your `root`.

- Render an h1 element with content of your choice. Check your browser to see if it rendered below the contact list.
- Now, move the code you just wrote to the very bottom of the `index.js` file.

5. The `render` method should really hold a reactNode.

- reactNode: A React node that you want to display. This will usually be a piece of JSX like `<App />`, but you can also pass a React element constructed with `createElement()`, a string, a number, null, or undefined.

```js
render(reactNode);
```

- Use the `createElement(type, props, ...children)` method from `React` to create a new h1 element that says "USERS", and hold it in a variable called `reactH1`. Similar to the way it was done in the `main` function above using `document.createElement('h1')`.
- For the `props` use and object literal `{}`.
- For the `children` use the string `"USERS"`.
- In `render` at the bottom of the file, replace the h1 element with the `reactH1` you just created.
- Check your browser to see if it rendered below the contact list and see where it is in the elements tab in your dev tools while you're at it.

6. Using the same method from the step above, create a new `ul` element held in a variable called `reactUl`.

- For now, leave the `children` empty.
- In `render` at the bottom of the file, replace `reactH1` with `reactUl`.
- Check your elements tab in your dev tools to see if it was added to the DOM.

7. Write a function called `usersList` to create the `li` elements for users from the `users` data at the top of the file.

- Use the `Array.map()` method to generate new `li` elements with each user name.
- You'll need to use the `createElement(type, props, ...children)` method in the `Array.map()` method.
- Here `children` will be the name of each user.
- Don't forget to return!

8. Invoke the usersList function as a "child" in your `reactUl`.

- Check your browser to see if it rendered below the contact list and check the elements tab in your dev tools while you're at it.

9. Now, we can put it all together. Copy and paste the following code snippet into your code.

```js
const reactFragment = React.createElement(React.Fragment, {}, reactH1, reactUl);
```

- A `Fragement` is a container that doesn't get written to the DOM. So, we can use this to gather everything together and then insert them into the node we want. In this case, that's the `<div id="root">Our React will be placed here!</div>`
- Lastly, in `render` at the bottom of the file, replace `reactUl` with `reactFragment`.

## Reflections

Now take a look at the code you just wrote and contrast that with the code that was provided at the top of the file.

- What are the similarities?
- Is this better, worse, or the same?
- What questions do you have about using React in this way?
