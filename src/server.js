const express = require('express');
const ejs = require('ejs');

var app = express();

app.use(express.static('public'))
   .set("view engine", 'ejs')
   .listen(8080)
   .get('/', (request, response) => {
    response.render('pages/index')
})