var express = require('express');

const app = express();

app.use(express.static('/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/select', (req, res) => {
  var select = require('./select.json');
  res.send(select);
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
