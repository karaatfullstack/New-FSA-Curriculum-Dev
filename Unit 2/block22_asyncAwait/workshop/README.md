1. Set up the HTML structure of your application. You will need a form for creating new diary entries, a container element to hold your entries, and a way to display and edit individual entries.

2. Create a JavaScript object or class to represent a diary entry. This should have properties for the title, body, and any other relevant information you want to store for each entry.

3. Write a function that takes in a diary entry object and adds it to the DOM. You will need to create the HTML elements for the entry, set their content to the values from the object, and append them to the container element.

4. Write a function to handle the form submission event. This function should create a new diary entry object from the form data, add it to the DOM, and reset the form fields.

5. Add event listeners to the diary entries to enable editing and deleting. You can use addEventListener to listen for clicks or double-clicks on the entry elements and toggle an "editing" state, or to listen for clicks on delete buttons and remove the entry from the DOM.

6. To store the entries persistently, you will need to use some kind of storage solution such as localStorage or a backend API. You can use the localStorage API to store the entries in the browser, or make HTTP requests to a server to create, read, update, and delete entries.