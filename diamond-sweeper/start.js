const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get('/api/products', function (req, res) {
  const product_info = [
  {"title": "Diamond Sweeper"},
  {"description": "Bla Bla..."}
  ];		
  res.json(product_info);
});

app.listen(5002, function () {
  console.log('Example app listening on port 5002!')
});
