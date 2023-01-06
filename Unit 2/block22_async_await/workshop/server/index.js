const express = require('express');
const cors = require('cors')
const Joi = require('joi');
const app = express();
app.use(express.json());
app.use(cors())

//customer should have id, name, email, phone
const customers = [
    { id: 1, name: 'John Doe', email: 'johnny@email.com', phone: '555-555-5555' },
    { id: 2, name: 'Jane Doe', email: 'janesdoe@gmail.com', phone: '555-555-5555' },
    { id: 3, name: 'John Smith', email: 'jsmith@yahoo.com', phone: '555-555-5555' },
    { id: 4, name: 'Jane Smith', email: 'jane654654@aol.com', phone: '555-555-5555' },
    { id: 5, name: 'Shane Taylor', email: 'shanealright@email.com', phone: '555-555-5555' },
];

app.get('/', (req, res) => {
    res.send('API WORKING!');
});

app.get('/api/customers', (req, res) => {
    res.send(customers);
});

app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) res.status(404).send('The customer with the given ID was not found.');
    res.send(customer);
});

app.post('/api/customers', (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const customer = {
        id: customers.length + 1,
        name: req.body.name
    };
    customers.push(customer);
    res.send(customer);
});

app.put('/api/customers/:id', (req, res) => {
    const { error } = validateCustomer(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    //update customer
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) {
        res.status(404).send('The customer with the given ID was not found.');
        return;
    }
    customer.name = req.body.name;
    res.send(customer);
});

//delete customers
app.delete('/api/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) {
        res.status(404).send('The customer with the given ID was not found.');
        return;
    }
    const index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});

//validate customer
function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(customer);
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));