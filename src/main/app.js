const express = require("express");

let app = express()
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

let router = express.Router();
router.get('/', (req, res, next) => {
    res.render('pages/index');
});

app.use(router)
exports.app = app;