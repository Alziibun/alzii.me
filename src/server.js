const express = require('express');
const vhost = require('vhost');

const app = express();
app.use(vhost('babbit.alzii.me', require('./babbit/app').app));
app.use(router);

app.listen(8080, () => {
    console.log("Server listening on 8080")
})