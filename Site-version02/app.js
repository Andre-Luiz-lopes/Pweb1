const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.render('index'));
app.get('/quiz', (req, res) => res.render('quiz'));
app.get('/resultado', (req, res) => res.render('resultado'));

const PORT = 3000;
module.exports = app;

