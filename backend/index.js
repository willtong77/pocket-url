const Url = require('./model/Url');
const UrlDao = require('./model/UrlDao');
const db = require('./data/db.js')
const express = require("express");
const app = express();
const port = 4567;

db.connect();

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
})
