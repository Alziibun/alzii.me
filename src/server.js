const vhost = require('vhost');
const express = require('express');

const app = express()
    .use(vhost('babbit.alzii.me', require('./private/config/babbit.js').app))
    .use(vhost('alzii.me', require('./private/config/home.js').app))

app.listen(8080, () =>{
    console.log('Listening on port 8080')
});

app.get('/', (request, response) => {
    response.render('pages/index')
})