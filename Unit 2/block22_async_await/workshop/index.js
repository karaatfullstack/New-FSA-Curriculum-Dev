/* Getting the form, table, nameInput, emailInput, phoneInput, and customerList from the DOM. */
const form = document.querySelector("#customer-form");
const table = document.querySelector("#customer-table");
const nameInput = document.querySelector("#customer-name");
const emailInput = document.querySelector("#customer-email");
const phoneInput = document.querySelector("#customer-phone");

const customerList = document.querySelector("#customer-list");

/**
 * It creates a new table row element, sets its innerHTML to a string of HTML, and then appends that
 * table row to the customerList element.
 * @param customer - the customer object
 */
function createCustomer(customer) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>
              <button class="edit-button" data-id="${customer.id}">Edit</button>
              <button class="delete-button" data-id="${customer.id}">Delete</button>
            </td>
          `;
  customerList.appendChild(tr);
}

/**
 * It takes a customer object as an argument, finds the row in the table that corresponds to that
 * customer, and updates the row with the new data.
 * 
 * The first line of the function uses the querySelector method to find the edit button that
 * corresponds to the customer. The querySelector method returns the first element that matches the
 * selector. In this case, the selector is [data-id="${customer.id}"] which means "find the element
 * with a data-id attribute that has the value of customer.id".
 * 
 * The next line uses the parentElement property to get the parent element of the edit button. The
 * parent element of the edit button is the td element that contains the edit and delete buttons. The
 * next line uses the parentElement property again to get the parent element of the td element. The
 * parent element of the td element is the tr element that contains the customer data.
 * 
 * The next line
 * @param customer - The customer object that we want to update.
 */
function updateCustomer(customer) {
  const tr = table.querySelector(`[data-id="${customer.id}"]`)
    .parentElement.parentElement;
  tr.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>
              <button class="edit-button" data-id="${customer.id}">Edit</button>
              <button class="delete-button" data-id="${customer.id}">Delete</button>
            </td>
          `;
}

/**
 * Find the table row that contains the button that was clicked, then remove that row from the table.
 * @param id - The id of the customer to be deleted.
 */
function deleteCustomer(id) {
  const tr = table.querySelector(`[data-id="${id}"]`).parentElement
    .parentElement;
  customerList.removeChild(tr);
}

/**
 * It fetches the customers from the API, then it converts the response to JSON, then it loops through
 * the customers and calls the createCustomer function for each one.
 * @returns a promise.
 */
function getCustomers() {
  return fetch("http://localhost:8080/api/customers")
    .then((response) => response.json())
    .then((customers) => {
      customers.forEach(createCustomer);
    });
}

/**
 * It takes a customer object as an argument, sends a POST request to the server, and then creates a
 * new customer in the DOM.
 * @param customer - {
 * @returns The response from the server.
 */
function addCustomer(customer) {
  return fetch("http://localhost:8080/api/customers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer)
  })
    .then((response) => response.json())
    .then((customer) => {
      createCustomer(customer);
    });
}

/**
 * It takes a customer object, sends a PUT request to the server, and then updates the customer in the
 * DOM.
 * @param customer - {
 * @returns The customer object is being returned.
 */
function editCustomer(customer) {
  return fetch(`http://localhost:8080/api/customers/${customer.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((response) => response.json())
    .then((customer) => {
      updateCustomer(customer);
    });
}

/**
 * It takes an id, makes a DELETE request to the server, and then deletes the customer from the DOM.
 * @param id - The id of the customer to delete.
 * @returns The return value of the fetch call.
 */
function removeCustomer(id) {
  return fetch(`http://localhost:8080/api/customers/${id}`, {
    method: "DELETE",
  }).then(() => {
    deleteCustomer(id);
  });
}

/* This is the code that is executed when the form is submitted. It prevents the default behavior of
the form, which is to reload the page. It then creates a customer object with the values from the
form. It then calls the addCustomer function, which sends the customer object to the server. It then
resets the form. */
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const customer = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
  };
  addCustomer(customer);
  form.reset();
});

getCustomers();

table.addEventListener("click", (event) => {
  /* Getting the id from the dataset, then it is getting the name, email, and phone from the table. Then
  it is replacing the name, email, and phone with input fields. Then it is replacing the edit button
  with a save button. */
  if (event.target.classList.contains("edit-button")) {
    //get id from dataset
    const id = event.target.dataset.id;

    // toggle name, email, and phone to input fields
    const name = table.querySelector(`[data-id="${id}"]`).parentElement
      .parentElement.children[1].textContent;
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[1].innerHTML = `<input type="text" id="customer-name" value="${name}" />`;

    const email = table.querySelector(`[data-id="${id}"]`).parentElement
      .parentElement.children[2].textContent;
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[2].innerHTML = `<input type="text" id="customer-email" value="${email}" />`;

    const phone = table.querySelector(`[data-id="${id}"]`).parentElement
      .parentElement.children[3].textContent;
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[3].innerHTML = `<input type="text" id="customer-phone" value="${phone}" />`;

    // toggle edit button to save button
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[4].innerHTML = `<button class="save-button" data-id="${id}">Save</button>`;
  }

  /* Getting the id from the dataset, then it is getting the name, email, and phone from the table. Then
  it is replacing the name, email, and phone with input fields. Then it is replacing the edit button
  with a save button. */
  if (event.target.classList.contains("save-button")) {
    //get id from dataset
    const id = event.target.dataset.id;

    // toggle name, email, and phone to input fields
    const name = table.querySelector(`[data-id="${id}"]`).parentElement
      .parentElement.children[1].children[0].value;
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[1].innerHTML = `${name}`;

    const email = table.querySelector(`[data-id="${id}"]`).parentElement
      .parentElement.children[2].children[0].value;
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[2].innerHTML = `${email}`;

    const phone = table.querySelector(`[data-id="${id}"]`).parentElement
      .parentElement.children[3].children[0].value;
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[3].innerHTML = `${phone}`;

    // toggle edit button to save button
    table.querySelector(
      `[data-id="${id}"]`
    ).parentElement.parentElement.children[4].innerHTML = `<button class="edit-button" data-id="${id}">Edit</button> <button class="delete-button" data-id="${id}">Delete</button>`;

    const customer = {
      id: id,
      name: name,
      email: email,
      phone: phone,
    };
    editCustomer(customer);
  }

  /* Getting the id from the dataset, then it is calling the removeCustomer function. */
  if (event.target.classList.contains("delete-button")) {
    const id = event.target.dataset.id;
    removeCustomer(id);
  }
});