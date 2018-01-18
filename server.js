'use strict';

// const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static('public'));

// const server = http.createServer((req, res)=> {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

app.listen(port, () => {
    console.log(`Server is running at ${port}/`);
});

