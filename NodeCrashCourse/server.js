const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method);

    //set response header content type
    res.setHeader('Content-Type', 'text/html');
    //// Inline HTMl ////
    //res.write('<h2>Hello Humans</h2>');
    //res.write('<p>Hello Humans again</p>');
    //res.end();

    let path = './Views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    //send an html file
    //fs.readFile('./Views/index.html', (err, data) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});