const express = require('express');

const serve = express();

export const route = serve;

route.get('/hello_world', (request, response) => {
    response.json({
        message: "Hello World"
    })
})