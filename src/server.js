const express = require('express');
const subdomain = require('express-subdomain');
const path = require('path');
const fs = require('fs');
const os = require('os');

const app = express();
app.set('view engine', 'ejs')
// set default includes as partials
app.set('views', __dirname + '/views')

const babbit = express.Router()
babbit.get('/', (req, res) => {
    res.render('pages/babbit/index')
})
babbit.get('/user/*', (req, res, next) => {
    res.end('Feature WIP')
})

const elsword = express.Router()
elsword.get('/', (req, res) => {
    res.render('pages/elsword/index')
})

const main = express.Router()
main.get('/*', (req, res) => {
    res.render(path.join('pages/default/', req.path), {links: JSON.parse(fs.readFileSync("./private/socials.json"))})
})

app.use(main)
app.use(subdomain('babbit', babbit))
app.use(subdomain('elsword', elsword))

app.listen(80, () => {
    console.log(`Listening on port 80`)
});