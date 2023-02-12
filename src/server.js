const express = require('express');
const subdomain = require('express-subdomain');
const fs = require('fs');
const os = require('os');

const app = express();
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views' )

const babbit = express.Router()
babbit.get('/', (req, res) => {
    res.render('pages/babbit/index')
})

const main = express.Router()
main.get('/', (req, res) => {
    res.render('pages/index')
})

app.use(main)
app.use(subdomain('babbit', babbit))

app.listen(52, () => {
    console.log(`Listening on port 8080`)
});