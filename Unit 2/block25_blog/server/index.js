const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

//blog should have id, title, author, content
const blogs = [
    { id: 1, title: 'Blog Title 1', author: "Jane Doe", content: 'Blog Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 2, title: 'Blog Title 2', author: "John Doe", content: 'Blog Content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 3, title: 'Blog Title 3', author: "Jane Doe", content: 'Blog Content 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 4, title: 'Blog Title 4', author: "John Doe", content: 'Blog Content 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 5, title: 'Blog Title 5', author: "Jane Doe", content: 'Blog Content 5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 6, title: 'Blog Title 6', author: "John Doe", content: 'Blog Content 6 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 7, title: 'Blog Title 7', author: "Jane Doe", content: 'Blog Content 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 8, title: 'Blog Title 8', author: "John Doe", content: 'Blog Content 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 9, title: 'Blog Title 9', author: "Jane Doe", content: 'Blog Content 9 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { id: 10, title: 'Blog Title 10', author: "John Doe", content: 'Blog Content 10 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
];

// /* This is a route handler. It is a function that is called when the application receives a request to
// the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.get('/', (req, res) => {
    try {
        res.send('Hello World!');
    } catch (error) {
        console.error(error);
    }
});


/* This is a route handler. It is a function that is called when the application receives a request to
the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.get('/api/blogs', (req, res) => {
    try {
        res.send(blogs);
    } catch (error) {
        console.error(error);
    }
});

// /* This is a route handler. It is a function that is called when the application receives a request to
// the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.get('/api/blogs/:id', (req, res) => {
    try {
        const blog = blogs.find(c => c.id === parseInt(req.params.id));
        if (!blog) {
            res.status(404).send('Blog not found.');
            return;
        }
        res.send(blog);
    } catch (error) {
        console.error(error);
    }
});

// /* This is a route handler. It is a function that is called when the application receives a request to
// the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.post('/api/blogs', (req, res) => {
    try {
        //check for missing values
        if (!req.body.title || !req.body.author || !req.body.content) {
            res.status(400).send('Missing required fields.');
            return;
        }

        //check if blog exists
        const blogExists = blogs.find(c => c.title === req.body.title);

        if (blogExists) {
            res.status(400).send('Blog already exists.');
            return;
        }

        /* This is creating a new blog object. */
        const blog = {
            id: blogs.length + 1,
            title: req.body.title,
            author: req.body.author,
            content: req.body.content
        };

        /* Adding the new blog to the blogs array. */
        blogs.push(blog);

        res.send(blog);
    } catch (err) {
        console.error(err);
    }
});

// /* This is a route handler. It is a function that is called when the application receives a request to
// the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.put('/api/blogs/:id', (req, res) => {
    try {
        //check for missing values
        if (!req.body.title || !req.body.author || !req.body.content) {
            res.status(400).send('Missing required fields.');
            return;
        }

        //check if blog exists
        const blog = blogs.find(c => c.id === parseInt(req.params.id));

        if (!blog) {
            res.status(404).send('Blog not found.');
            return;
        }

        //update blog
        blog.title = req.body.title;
        blog.author = req.body.author;
        blog.content = req.body.content;

        res.send(blog);

    } catch (error) {
        console.error(err);
    }
});

// /* This is a route handler. It is a function that is called when the application receives a request to
// the specified route (in this case, the root route) and HTTP method (in this case, GET). */
app.delete('/api/blogs/:id', (req, res) => {
    try {
        const blog = blogs.find(c => c.id === parseInt(req.params.id));

        if (!blog) {
            res.status(404).send('The blog with the given ID was not found.');
            return;
        }
        const index = blogs.indexOf(blog);

        blogs.splice(index, 1);

        res.send(blog);
    } catch (error) {
        console.error(err);
    }
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));