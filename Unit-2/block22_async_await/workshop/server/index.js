const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors())

//customer should have id, name, email, phone
const customers = [
    { id: 1, name: 'John Doe', email: 'johnny@email.com', phone: '555-281-0123' },
    { id: 2, name: 'Jane Doe', email: 'janesdoe@gmail.com', phone: '555-386-4567' },
    { id: 3, name: 'John Smith', email: 'jsmith@yahoo.com', phone: '555-654-8901' },
    { id: 4, name: 'Jane Smith', email: 'jane654654@aol.com', phone: '555-951-2345' },
    { id: 5, name: 'Shane Taylor', email: 'shanealright@email.com', phone: '555-762-6789' },
    { id: 6, name: 'Shelly Taylor', email: 'shellsandbells@fullstackacademy.com', phone: '555-098-7654' },
];

/* This is a route handler. It is a function that is called when the application receives a request to
the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.get('/', (res) => {
    try {
        res.send('API WORKING!');
    } catch (error) {
        console.error(error);
    }
});

/* This is a route handler. It is a function that is called when the application receives a request to
the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.get('/api/customers', (req, res) => {
    try {
        res.send(customers);
    } catch (error) {
        console.error(error);
    }
});

/* This is a route handler. It is a function that is called when the application receives a request to
the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.get('/api/customers/:id', (req, res) => {
    try {
        const customer = customers.find(c => c.id === parseInt(req.params.id));

        if (!customer) {
            res.status(404).send('The customer with the given ID was not found.');
            return;
        }

        res.send(customer);
    } catch (err) {
        console.error(err);
    }
});

/* This is a route handler. It is a function that is called when the application receives a request to
the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.post('/api/customers', (req, res) => {
    try {
        //check for missing values
        if (!req.body.name || !req.body.email || !req.body.phone) {
            res.status(400).send('Please include a name, email, and phone number.');
        }

        //check if customer exists
        const customerExists = customers.find(c => c.name === req.body.name);
        if (customerExists) {
            //if customer exists, send error message
            res.status(400).send('Customer already exists.');
            return;
        }

        /* This is creating a new customer object. */
        const customer = {
            id: customers.length + 1,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        };

        /* Adding the new customer to the customers array. */
        customers.push(customer);

        res.send(customer);
    } catch (err) {
        console.error(err);
    }
});

/* This is a route handler. It is a function that is called when the application receives a request to
the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.put('/api/customers/:id', (req, res) => {
    try {
        const customer = customers.find(c => c.id === parseInt(req.params.id));

        if (!customer) {
            res.status(404).send('The customer with the given ID was not found.');
            return;
        }

        //update customer
        customer.name = req.body.name;
        customer.email = req.body.email;
        customer.phone = req.body.phone;

        res.send(customer);
    } catch (error) {
        console.error(err);
    }
});

/* This is a route handler. It is a function that is called when the application receives a request to
the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.delete('/api/customers/:id', (req, res) => {
    try {
        const customer = customers.find(c => c.id === parseInt(req.params.id));

        if (!customer) {
            res.status(404).send('The customer with the given ID was not found.');
            return;
        }
        const index = customers.indexOf(customer);

        customers.splice(index, 1);

        res.send(customer);
    } catch (error) {
        console.error(err);
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));