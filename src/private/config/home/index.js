const express = require("express");
const ejs = require('ejs');
var app = express()

app.use(express.static('/public/home'))
app.set("view engine", 'ejs')

exports.app = app;