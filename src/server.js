const express = require('express');
const subdomain = require('express-subdomain');
const fs = require('fs');
const os = require('os');

const app = express();
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views' )

//Load every domain
const babbit = express.Router()
babbit.get('/', (req, res) => {
    res.send('pages/index')
})

const main = express.Router()
main.get('/', (req, res) => {
    res.render('pages/index')
})

app.use(main)
app.use(subdomain('babbit', babbit))

app.listen(8080, () => {
    console.log(`Listening on ${os.hostname}:8080`)
});