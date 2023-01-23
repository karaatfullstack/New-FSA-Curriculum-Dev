// get div with an id of root
const root = document.getElementById('root');

//create a div
const div = document.createElement('div');

//create a h1
const h1 = document.createElement('h1');

//create a p
const p = document.createElement('p');

//create a button
const button = document.createElement('button');

//create a text node
const text = document.createTextNode('Click Me');

//add text to button
button.appendChild(text);

//add button to div
div.appendChild(button);

//add h1 to div
div.appendChild(h1);

//add p to div
div.appendChild(p);

//add div to root
root.appendChild(div);

//add event listener to button
button.addEventListener('click', () => {
    //create a new element
    const newElement = document.createElement('p');

    //create a new text node
    const newText = document.createTextNode('New Paragraph');

    //add text to new element
    newElement.appendChild(newText);

    //add new element to div
    div.appendChild(newElement);
});