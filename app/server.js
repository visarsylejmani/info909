const express = require('express');
const path = require('path')

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
app.post('/add', function (req, res) {
  var num1 = parseFloat(req.body.num1)
  var num2 = parseFloat(req.body.num2)
  var total = (num1 + num2).toString()
  return res.status(200).send(total)
})

app.post('/sub', function (req, res) {
  var num1 = parseFloat(req.body.num1)
  var num2 = parseFloat(req.body.num2)
  var total = (num1 - num2).toString()
  return res.status(200).send(total)
})

app.post('/mul', function (req, res) {
  var num1 = parseFloat(req.body.num1)
  var num2 = parseFloat(req.body.num2)
  var total = (num1 * num2).toString()
  return res.status(200).send(total)
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
