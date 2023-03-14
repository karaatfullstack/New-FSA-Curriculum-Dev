// Create Express Server at port 8080

app.get('/', (req, res) => {
    // server up the public folder as static index.html file

});


// HELLO WORLD endpoint
app.get('/hello', (req, res) => {
    // send a response
    
});

// dynamic endpoint
app.get('/hello/:name', (req, res) => {
    // get the name from the request

    // send a response

});

// dynamic endpoint with query string
app.get('/hello-query', (req, res) => {
    // get the name from the request

    // send a response

});

// set the server to listen on port 8080

module.exports = app;