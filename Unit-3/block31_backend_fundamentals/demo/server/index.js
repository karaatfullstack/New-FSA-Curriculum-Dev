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
    //parse url
    const parsedUrl = url.parse(req.url, true);

    // resolve GET /books
    if (parsedUrl.pathname === '/books' && req.method === 'GET') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(books));
    }

    // resolve GET /books/:id
    if (parsedUrl.pathname.match(/^\/books\/([0-9]+)$/)) {
        const id = parsedUrl.pathname.split('/')[2];
        const book = books.find(b => b.id === parseInt(id));
        //don't rewrite the whole array nor remove the book
        if (!book) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Book not found' }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(book));
        }
    }

    // resolve POST /books
    if (parsedUrl.pathname === '/books' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { title, author, price, quantity } = JSON.parse(body);
            const book = {
                id: books.length + 1,
                title,
                author,
                price,
                quantity,
            };
            books.push(book);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(book));
        });
    }

    // resolve PUT /books/:id
    if (parsedUrl.pathname.match(/^\/books\/([0-9]+)$/)) {
        const id = parsedUrl.pathname.split('/')[2];
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { title, author, price, quantity } = JSON.parse(body);
            const book = {
                id: parseInt(id),
                title,
                author,
                price,
                quantity,
            };
            const index = books.findIndex(b => b.id === parseInt(id));
            books[index] = book;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(book));
        });
    }

    // resolve DELETE /books/:id
    if (parsedUrl.pathname.match(/^\/books\/([0-9]+)$/)) {
        const id = parsedUrl.pathname.split('/')[2];
        const index = books.findIndex(b => b.id === parseInt(id));
        books.splice(index, 1);
        res.writeHead(204, { 'Content-Type': 'application/json' });
        res.end();
    }
});

server.listen(8080, () => {
    console.log('Server listening on port 8080');
});