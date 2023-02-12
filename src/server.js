const express = require('express');
const subdomain = require('express-subdomain');
const fs = require('fs');
const os = require('os');

const app = express();
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views' )

const babbit = express.Router()
babbit.get('/babbit', (req, res) => {
    res.render('pages/babbit/index')
})

const elsword = express.Router()
elsword.get('/', (req, res) => {
    res.render('pages/elsword/index')
})

const main = express.Router()
main.get('/', (req, res) => {
    res.render('pages/index')
})

app.use(main)
app.use(subdomain('babbit', babbit))
app.use(subdomain('elsword', elsword))

app.listen(52, () => {
    console.log(`Listening on port 52`)
});