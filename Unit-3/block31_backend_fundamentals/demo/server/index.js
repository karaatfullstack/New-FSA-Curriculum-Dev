const http = require('http');
const url = require('url');

const books = [
    {
        id: 1,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        price: 10.99,
        quantity: 5,
    },
    {
        id: 2,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        price: 15.99,
        quantity: 3,
    },
    {
        id: 3,
        title: 'The Silmarillion',
        author: 'J.R.R. Tolkien',
        price: 12.99,
        quantity: 2,
    },
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/books') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(books));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not found');
    }
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});