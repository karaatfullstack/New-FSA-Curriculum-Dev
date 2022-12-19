const form = document.querySelector('form');
const entriesContainer = document.querySelector('.entries');

class DiaryEntry {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }
}

function addEntryToDOM(entry) {
  const entryElement = document.createElement('div');
  entryElement.classList.add('entry');

  const titleElement = document.createElement('h2');
  titleElement.textContent = entry.title;

  const bodyElement = document.createElement('p');
  bodyElement.textContent = entry.body;

  entryElement.appendChild(titleElement);
  entryElement.appendChild(bodyElement);
  entriesContainer.appendChild(entryElement);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = event.target.elements.title.value;
  const body = event.target.elements.body.value;

  const entry = new DiaryEntry(title, body);
  addEntryToDOM(entry);

  form.reset();
});
