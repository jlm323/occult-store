// load express
const express = require('express');

// create express app
const app = express();

// port
const port = 3000;

//  listen to port
app.listen(port, () => {
    console.log('listening on port: ', port);
});