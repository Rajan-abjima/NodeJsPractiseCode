const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(3000);

app.use((req,res, next) => {
    console.log('new request was made');
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    next();
})

app.get('/',(req,res) => {
    //res.send('<h1>Test app</h1>');
    res.send('./Views/index.html', {root: __dirname});
});
app.get('/about', (req, res) => {
    res.send('./Views/about.html', {root: __dirname});
})

//redirects
app.get('/about', (req, res) => {
    res.redirect('./about');
})

// 404 page
app.use( (req, res) => {
    res.statusCode(404).sendFile('./Views/404.html', {root: __dirname});
});