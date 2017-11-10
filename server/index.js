var express = require('express');
var bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.post('/form', (req, res) =>{
  res.send(req.body);
})

app.listen(5000, () => {
  console.log('listening on port 5000');
});
