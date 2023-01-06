const form = document.getElementById('customer-form');


async function getCustomers() {
  try {
    const response = await fetch('http://localhost:8080/api/customers');
    const customers = await response.json();
    console.log(customers);

    // map through data and return name, email, and phone number at div id="customers"
    const customersList = customers.map(customer => {
      return `
        <li>
        <div>
          <span>${customer.name} - ${customer.email} - ${customer.phone}</span>
        </div>
        </li>
      `;
    });

    // join the list items into a string
    const customersListString = customersList.join('');

    // set the innerHTML of the div to the string
    document.getElementById('customers').innerHTML = customersListString;
  } catch (err) {
    console.error(err);
  }
}

getCustomers();

form.addEventListener('submit', function (event) {
  // Your code here
  const name = event.target.elements.name.value;
  const email = event.target.elements.email.value;
  const phone = event.target.elements.phone.value;

  const customer = {
    name,
    email,
    phone
  };

  console.log(customer);
});