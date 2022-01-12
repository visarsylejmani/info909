const express = require('express');
const { sub, mul, add, div } = require("./functions");

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.post('/add', (req, res) => {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var total = add(num1, num2);
  return res.status(200).send(total);
})

app.post('/sub', (req, res) => {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var total = sub(num1, num2);
  return res.status(200).send(total);
})

app.post('/mul', (req, res) => {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var total = mul(num1, num2);
  return res.status(200).send(total);
})

app.post('/div', (req, res) => {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var total = div(num1, num2);
  return res.status(200).send(total);
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
