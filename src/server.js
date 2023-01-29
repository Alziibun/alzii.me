const vhost = require('vhost');
const express = require('express');

const app = express()
    .use(vhost('babbit.alzii.me', require('private/config/babbit').app))
    .use(vhost('alzii.me', require('private/config/home').app))
    .listen(8080);

app.get('/', (request, response) => {
    response.render('pages/index')
})